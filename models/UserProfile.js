import mongoose from "mongoose";

const userProfileSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true, // Always require user id to be present
  },
  firstName: {
    type: String,
    required: true, // Always require first name to be present
  },
  lastName: {
    type: String,
    required: true, // Always require last name to be present
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

export default mongoose.model("UserProfile", userProfileSchema);
