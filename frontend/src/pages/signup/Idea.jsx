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
   const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/terms"); // ✅ Redirects to Terms & Conditions page
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
          Startup Idea Information
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

          {/* About the Idea */}
          <label>Idea Description</label>
          <motion.textarea
            placeholder="Tell us about the idea..."
            className="signup-input"
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
             transition={{ type: "spring", stiffness: 300 }}
          ></motion.textarea>

           {/* Development Stage */}
          <label>Development Stage</label>
          <motion.select
          className="dropdown-select"
          defaultValue=""
          required
          whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
           >
          <option value="" disabled hidden>Select Development Stage</option>
          <option value="Idea Stage">Idea Stage</option>
          <option value="Prototype">Prototype</option>
          <option value="MVP">MVP</option>
          </motion.select>

          {/* Funding */}
          <label>Funding Required (Max ₹25 Lakhs)</label>
          <motion.div 
          className="funding-input-container"
           whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
           transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="funding-symbol">₹</span>
            <div className="funding-divider"></div>
            <input
             type="number"
             placeholder="Enter amount in exact figures"
             max="2500000"
             className="funding-input"
            />
          </motion.div>

          {/* Pitch Deck */}
          <label>Pitch Deck (PPT/PDF Upload)</label>
          <motion.div
            className="upload-box"
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
             transition={{ type: "spring", stiffness: 300 }}
          >
            <FaFileUpload className="upload-icon golden-icon" />
            <p>Upload Pitch Deck</p>
            <input type="file" accept=".ppt,.pptx,.pdf" className="file-input-overlay" />
          </motion.div>

          {/* NDA */}
          <label>NDA Agreement Request</label>
          <motion.select
            className="dropdown-select"
            defaultValue=""
             whileHover={{ scale: 1.02, boxShadow: "0 0 8px rgba(212, 175, 55, 0.5)" }}
             transition={{ type: "spring", stiffness: 300 }}
          >
            <option value="" disabled hidden>Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </motion.select>

          {/* Submit */}
          <motion.button
            type="submit"
            className="signup-button"
            whileHover={{ backgroundColor: "#f1d86d", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Idea;
