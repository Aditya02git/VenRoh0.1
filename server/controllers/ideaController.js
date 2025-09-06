import { databases, storage, ID } from "../config/appwrite.js";
import { InputFile } from "node-appwrite/file";

const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.APPWRITE_IDEA_COLLECTION_ID;
const BUCKET_ID = process.env.APPWRITE_BUCKET_ID;

const uploadFile = async (file) => {
  if (!file || !file.buffer) return "";
  
  try {
    console.log("Uploading file:", {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      bufferLength: file.buffer.length
    });
    
    const inputFile = InputFile.fromBuffer(
      file.buffer,
      file.originalname
    );
    
    // Upload file to Appwrite
    const uploadedFile = await storage.createFile(
      BUCKET_ID, 
      ID.unique(), 
      inputFile
    );
    
    console.log("File uploaded successfully:", uploadedFile.$id);
    return uploadedFile.$id;
  } catch (error) {
    console.error("File upload error:", error);
    throw error;
  }
};

export const submitIdea = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Request files:", req.files);
    
    const {
      name,
      phone,
      first_line_address,
      password,
      country,
      state,
      city,
      pin_code,
      age,
      email
    } = req.body;

    // Upload files - Check if files exist before uploading
    const govtIdFile = req.files["govt_id"]?.[0];
    const profilePhotoFile = req.files["profile_photo"]?.[0];

    console.log("Files to upload:", {
      govtId: !!govtIdFile,
      profilePhoto: !!profilePhotoFile
    });

    const govtIdUrl = await uploadFile(govtIdFile);
    const profilePhotoUrl = await uploadFile(profilePhotoFile);

    // Save document
    const document = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        name,
        phone,
        age: parseInt(age),
        email,
        first_line_address,
        password,
        country,
        state,
        city,
        pin_code:parseInt(age),
        govt_id_url: govtIdUrl,
        profile_photo: profilePhotoUrl,
        role: "Idea",
        created_at: new Date().toISOString(),
      }
    );

    res.status(201).json({ success: true, data: document });
  } catch (error) {
    console.error("Error saving idea:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to save data",
      error: error.message 
    });
  }
};