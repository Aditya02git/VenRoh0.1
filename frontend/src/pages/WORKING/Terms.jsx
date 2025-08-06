import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import "./TermsStyles.css";

const Terms = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="terms-container">
      <motion.div
        className="terms-card"
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

        {/* Page Title */}
        <motion.h1
          className="terms-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Terms & Conditions
        </motion.h1>

        {/* Terms Text */}
        <motion.div
          className="terms-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p>
            Welcome to our Venture Capital Portal. By proceeding, you agree to comply with
            and be bound by the following terms and conditions:
          </p>
          <ul>
            <li>All information submitted must be genuine and verifiable.</li>
            <li>We reserve the right to verify your company and funding claims.</li>
            <li>No misleading or fraudulent data should be provided.</li>
            <li>Your uploaded documents will be handled with strict confidentiality.</li>
            <li>Violation of these terms may lead to disqualification or account suspension.</li>
          </ul>
        </motion.div>

        {/* Accept or Decline Section */}
        <motion.div
          className="terms-options"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* ✅ Accept Option */}
          <motion.div
            className={`option-box ${selectedOption === "accept" ? "selected" : ""}`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(212,175,55,0.5)" }}
            onClick={() => setSelectedOption("accept")}
          >
            {selectedOption === "accept" && (
              <motion.div
                className="tick-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheckCircle />
              </motion.div>
            )}
            <span>I Accept</span>
          </motion.div>

          {/* ❌ Decline Option */}
          <motion.div
            className={`option-box ${selectedOption === "decline" ? "selected-decline" : ""}`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(255,0,0,0.3)" }}
            onClick={() => setSelectedOption("decline")}
          >
            {selectedOption === "decline" && (
              <motion.div
                className="tick-icon decline"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCheckCircle />
              </motion.div>
            )}
            <span>I Don't Accept</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Terms;
