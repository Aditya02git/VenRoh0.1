import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./DashboardStyles.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get user data from navigation state or fallback values
  const { name = "User", role = "Idea", email = "example@email.com", phone = "N/A" } =
    location.state || {};

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="dashboard-container">
      <motion.div
        className="dashboard-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* 🔙 Back Button */}
        <motion.button
          className="back-button"
          onClick={handleBack}
          whileHover={{ scale: 1.1, backgroundColor: "#caa92f" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft className="back-icon" /> Back
        </motion.button>

        {/* Header */}
        <motion.h1
          className="dashboard-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome, {name} 👋
        </motion.h1>

        {/* Profile Section */}
        <motion.div
          className="profile-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
        >
          <FaUserCircle className="profile-icon" />
          <div className="profile-details">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Role:</strong> {role}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
          </div>
        </motion.div>

        {/* Dashboard Actions */}
        <motion.div
          className="dashboard-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="dashboard-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#f1d86d" }}
            whileTap={{ scale: 0.95 }}
          >
            View Profile
          </motion.button>
          <motion.button
            className="dashboard-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#f1d86d" }}
            whileTap={{ scale: 0.95 }}
          >
            Edit Details
          </motion.button>
          <motion.button
            className="dashboard-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#f1d86d" }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
