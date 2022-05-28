import mongoose from "mongoose";

const organisationSchema = mongoose.Schema({
  BusinessName: {
    type: String,
    required: true, // Always require user id to be present
  },
  registrationNumber: {
    type: String,
    required: true, // Always require organisation id to be present
  },
});

export default mongoose.model("Organisation", organisationSchema);
