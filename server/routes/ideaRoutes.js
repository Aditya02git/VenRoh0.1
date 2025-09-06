import express from "express";
import multer from "multer";
import { submitIdea } from "../controllers/ideaController.js";

const router = express.Router();

// Configure multer with explicit memory storage and limits
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 3 // Maximum 3 files
  },
  fileFilter: (req, file, cb) => {
    // Optional: Add file type validation
    const allowedTypes = [
      'image/jpeg', 'image/png', 'image/jpg', // For profile photo
      'application/pdf', // For documents
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      // PowerPoint
     "application/vnd.ms-powerpoint", // .ppt (older PowerPoint)
     "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      console.log(`Rejected file type: ${file.mimetype}`);
      cb(new Error(`File type ${file.mimetype} not allowed`), false);
    }
  }
});

// Debug middleware to log incoming requests
const debugMiddleware = (req, res, next) => {
  console.log("=== INCOMING REQUEST ===");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers);
  next();
};

router.post("/submit-idea",
  debugMiddleware,
  upload.fields([
    { name: "govt_id", maxCount: 1 },
    { name: "profile_photo", maxCount: 1 }
  ]),
  (req, res, next) => {
    // Additional debug middleware after multer
    console.log("=== AFTER MULTER ===");
    console.log("req.files:", req.files);
    console.log("req.body:", req.body);
    next();
  },
  submitIdea
);

export default router;