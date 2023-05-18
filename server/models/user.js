import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    age: {
      type: Number,
      min: 0,
    },
    dateOfBirth: {
      type: Date,
    },
    maritalStatus: {
      type: String,
      enum: ["SINGLE", "MARRIED", "DIVORCED", "WIDOWED"],
    },
    nationality: {
      type: String,
    },
    nidOrPassportNumber: {
      type: String,
    },
    documentImage: {
      type: String,
    },
    accountStatus: {
      type: String,
      enum: ["UNVERIFIED", "PENDING VERIFICATION", "VERIFIED"],
      default: "UNVERIFIED",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
