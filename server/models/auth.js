import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String },
    tags: { type: [String] },
    profileImage: { type: String },
    followings: { type: [String], default: [] },
    planOpted: { type: String, default: 'Free', required: true },
    planOptedOn: { type: Date },
    noOfQuestions:  {type: Number, default:1, required:true},
    followers: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
