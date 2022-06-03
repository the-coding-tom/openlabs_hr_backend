import mongoose from "mongoose";

// Profile Schema
const userProfileSchema = mongoose.Schema({
  userID: {
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
  },
  streetAddress: {
    type: String,
  },
  city: {
    type: String,
  },
  region: {
    type: String,
  },
  country: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  mobile: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
});

// User Schema
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true, // Always require email to be present
  },
  password: {
    type: String,
    required: true, // Always require password to be present
  },
  profile: userProfileSchema,
});

export default mongoose.model("User", userSchema);
