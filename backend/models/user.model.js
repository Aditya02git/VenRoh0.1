import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, // User email address
    password: { type: String, required: true },

    phone: {
      type: String,
      default: "",
    }, 

    userEmail: {
      type: String,
      default: "",
    }, 

    companyEmail: {
      type: String,
      default: "",
    }, 

   officialEmail: {
      type: String,
      default: "",
    }, 

    address: {
      type: String,
      default: "",
    }, 

    profilePicture: {
      type: String,
      default: "",
    },

    idVerification: {
      type: String,
      default: "",
    }, //done

    headline: {
      type: String,
      default: "MVP User", //StartUp or Idea or Investor
    }, //done

    location: {
      type: String,
      default: "Earth",
    },

    about: {
      type: String,
      default: "",
    },

    age: {
      type: Number,
      default: "",
    },

    startUpName: {
      type: String,
      default: "",
    },

    startUpDescription: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },

    foundedYear: {
      type: Number,
      default: null,
    },

    numberOfEmployees: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "",
    },
    
    types: {
      type: String,
      default: "",
    },

    work: {
      type: String,
      default: "",
    },

    portfolio: {
      type: String,
      default: "",
    },

    currentStage: {
      type: String,
      default: "",
    }, //done

    totalFunding: {
      type: String,
      default: "",
    },

    investmentRange: {
      type: String,
      default: "",
    },

    totalInvestment: {
      type: String,
      default: "",
    },
companiesInvested: {
  type: [String], // Array of company names
  default: [],
},
companiesStatus: {
  type: String,
  enum: ["Not Allotted", "Pending", "Verified", "Rejected"],
  default: "Not Allotted",
},


    Roadmap: [
      {
        year: {
          type: Number,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
        pdf: {
          type: String,
          required: false,
        },
      },
    ],

    credit: {
      type: Number,
      default: 5,
    },

    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
