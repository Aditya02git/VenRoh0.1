import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaFileUpload, FaArrowLeft } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./SignUpStyles2.css";

const Idea = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value, country) => {
    setPhone(value);
  };
   
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="signup-container">
      <motion.div
        className="signup-card"
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
      
        <motion.h1
          className="signup-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Investor Information
        </motion.h1>

        <motion.form
          className="signup-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Profile Photo */}
          <label>Profile Photo</label>
          <motion.div
            className="upload-box"
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
          >
            <FaUserCircle className="upload-icon golden-icon" />
            <p>Click or Drag to Upload</p>
            <input type="file" accept="image/*" className="file-input-overlay" />
          </motion.div>

          {/* Phone Number */}
          <label>Phone Number</label>
          <motion.div
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
          >
            <PhoneInput
              country="in"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="123-456-7890"
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: false,
                className: "signup-input-phone",
              }}
              enableSearch={true}
              countryCodeEditable={false}
              disableCountryCode={false}
              disableDropdown={false}
              containerClass="phone-input-container"
              buttonClass="phone-dropdown-button"
              dropdownClass="phone-dropdown"
              searchClass="phone-search"
              specialLabel=""
              autoFormat={true}
              onlyCountries={["us", "in", "gb", "ca", "au", "de", "fr", "jp", "cn"]}
            />
          </motion.div>

          {/* Address */}
          <label>Address</label>
          <motion.input
            type="text"
            placeholder="Enter your address"
            className="signup-input"
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Age */}
          <label>Age (in yrs)</label>
          <motion.input
            type="number"
            placeholder="Enter your age"
            className="signup-input"
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
             transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Email */}
          <label>Email ID</label>
          <motion.input
            type="email"
            placeholder="example@email.com"
            className="signup-input"
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
             transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Govt ID */}
          <label>Govt. ID</label>
          <motion.div
            className="upload-box"
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
             transition={{ type: "spring", stiffness: 300 }}
          >
            <FaFileUpload className="upload-icon golden-icon" />
            <p>Upload Document (JPG, PNG, PDF)</p>
            <input type="file" accept=".jpg,.png,.pdf" className="file-input-overlay" />
          </motion.div>

          {/* About */}
          <label>About</label>
          <motion.textarea
            placeholder="Tell us about yourself..."
            className="signup-input"
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
             transition={{ type: "spring", stiffness: 300 }}
          ></motion.textarea>
          {/* Submit */}
          <motion.button
            type="submit"
            className="signup-button"
            whileHover={{ backgroundColor: "#f1d86d", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Idea;
