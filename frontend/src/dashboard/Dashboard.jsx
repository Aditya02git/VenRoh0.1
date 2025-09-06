import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  Eye,
  EyeOff,
  Plus,
  ChevronRight,
  MoreHorizontal,
  Send,
  User,
  MessageSquare,
  Database,
} from "lucide-react";
import { Client, Account, Databases, Query } from "appwrite";

const PROJECT_ID=import.meta.env.VITE_APPWRITE_PROJECT_ID
const ENDPOINT=import.meta.env.VITE_APPWRITE_ENDPOINT
const DATABASE_ID=import.meta.env.VITE_APPWRITE_DATABASE_ID
const startup_collection=import.meta.env.VITE_APPWRITE_STARTUP_COLLECTION_ID

// ⚡ Appwrite client setup
const client = new Client()
  .setEndpoint(ENDPOINT) // your Appwrite endpoint
  .setProject(PROJECT_ID); // replace with your Appwrite project ID

const account = new Account(client);
const databases = new Databases(client);

const Dashboard = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accounts");
  const [firstName, setFirstName] = useState(""); // <-- user's first name

  // Placeholder Appwrite collections data
  const sections = [
    { key: "accounts", label: "Accounts", icon: <Database className="w-4 h-4" /> },
    { key: "transactions", label: "Transactions", icon: <Database className="w-4 h-4" /> },
    { key: "investments", label: "Investments", icon: <Database className="w-4 h-4" /> },
    { key: "settings", label: "Settings", icon: <Database className="w-4 h-4" /> },
  ];

  const accounts = [
    { type: "Premium Account", balance: "$137.96", remaining: "Remaining Limit: $1376.96", icon: "✨", progress: 75 },
    { type: "Bank Account", balance: "$16,365.50", icon: "$", progress: 60 },
    { type: "Gold Account", balance: "44.70 Oz", icon: "Au", progress: 85 },
  ];

  const chatUsers = [
    { name: "Christina Breun", department: "Marketing", message: "Hey, how are your trades going?", time: "2m ago" },
    { name: "Marcus Johnson", department: "Marketing", message: "Great profits today!", time: "5m ago" },
    { name: "Sarah Williams", department: "Marketing", message: "Thanks for the trading tip", time: "1h ago" },
  ];

  // ⚡ Fetch user first name from Appwrite collection
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await account.get(); // get logged-in user

        // Query startup-ideas collection where userId matches
        const res = await databases.listDocuments(
          DATABASE_ID,            // replace
          startup_collection, // replace
          [Query.equal("userId", user.$id)]
        );

        if (res.total > 0) {
          setFirstName(res.documents[0].firstName); // assuming `firstName` field exists
        }
      } catch (err) {
        console.error("Error fetching user name:", err);
      }
    };

    fetchUserData();
  }, []);

  // Animation configs
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="flex">
        {/* Sidebar Section Switch */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 space-y-4">
          <h2 className="text-lg font-semibold mb-4">Dashboard Sections</h2>
          {sections.map((section) => (
            <motion.button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-colors ${
                activeSection === section.key
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-300"
              }`}
            >
              {section.icon}
              <span>{section.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Main Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex-1 p-6">
          {activeSection === "accounts" && (
            <motion.div variants={itemVariants} className="mb-8">
              {/* 👇 Replace Accounts with User's First Name */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <h1 className="text-2xl font-semibold">
                    {firstName ? firstName : "Loading..."}
                  </h1>
                  <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                    <span className="text-yellow-500 font-bold">AB</span>
                    <span className="text-gray-300">All Banks</span>
                    <span className="bg-gray-700 px-2 py-0.5 rounded text-sm">
                      {accounts.length}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
