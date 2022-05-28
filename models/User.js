import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true, // Always require email to be present
  },
  password: {
    type: String,
    required: true, // Always require password to be present
  },
});

export default mongoose.model("User", userSchema);
