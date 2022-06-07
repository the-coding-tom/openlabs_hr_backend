import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Profile Schema
const userProfileSchema = mongoose.Schema({
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

userSchema.pre("save", async function (next) {
  try {
    // do stuff
    const saltRounds = 10;
    // const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(this.password, saltRounds);
    // Store hash in your password DB.
    this.password = hash;
    next();
  } catch (exception) {
    console.log(exception);
  }
});
export default mongoose.model("User", userSchema);
