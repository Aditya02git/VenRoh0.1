import User from "../models/user.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getSuggestedConnections = async (req, res) => {
    try {
        const currentUser = await User.findById(req.user._id).select("connections");

        //find users who are not already connected , and also do not recommend our own profile

        const suggestedUser = await User.find({
            _id: {
                $ne: req.user._id,
                $nin: currentUser.connections
            }
        }).select("name username profilePicture headline");

        res.json(suggestedUser);

    } catch (error) {
        console.error("Error in getSuggestedConnections controller:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getPublicProfile = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username }).select("-password");

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);

    } catch (error) {
        console.error("Error in getPublicProfile controller:", error);
        res.status(500).json({ message: "Server error" });      
    }
};


//This is the way that the profiles are gonna updated 
export const updateProfile = async (req, res) => {
    try {
        const allowedFields = [
            "name",
            "username",
            "headline",
            "phone",
            "userEmail",
            "companyEmail",
            "officialEmail",
            "address",
            "about",
            "age",
            "idVerification",
            "startUpName",
            "startUpDescription",
            "website",
            "foundedYear",
            "numberOfEmployees",
            "category",
            "types",
            "work",
            "totalInvestment",
            "companiesInvested",
            "portfolio",
            "currentStage",
            "totalFunding",
            "investmentRange",
            "locations",
            "profilePicture",
            "bannerImg",
            "Roadmap",
            "credit",
        ];

        const updatedData = {};//updated data will be here 

        for(const field of allowedFields){
            if(req.body[field]){
                updatedData[field] = req.body[field];
            }
        }

        //for profile picture updation
        if(req.body.profilePicture) {
            const result = await cloudinary.uploader.upload(req.body.profilePicture)
            updatedData.profilePicture = result.secure_url;
        }

        //for banner image updaation
        if(req.body.bannerImg) {
            const result = await cloudinary.uploader.upload(req.body.bannerImg)
            updatedData.bannerImg = result.secure_url;
        }

        const user = await User.findByIdAndUpdate(req.user._id, { $set: updatedData }, { new: true }).select("-password");

        res.json(user);

    } catch (error) {
        console.error("Error in updateProfile controller:", error);
        res.status(500).json({ message: "Server error" });        
    }
};

// Assuming you have User model imported and auth middleware to get req.user._id


//currently not in use
export const searchUsers = async (req, res) => {
  try {
    // Get the current user's connections (if any)
    const { connections = [] } = await User.findById(req.user._id).select("connections");

    // Find users who are not already connected and exclude the current user
    const searchUsers = await User.find({
      _id: {
        $ne: req.user._id,
        $nin: connections
      }
    }).select("name username profilePicture headline");

    res.json(searchUsers);
    
  } catch (error) {
    console.error("Error in searchUsers controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user._id;

    // Find and delete the user
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Clear the auth token cookie
    res.clearCookie("jwt-startupmvp");

    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Error in deleteAccount controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};