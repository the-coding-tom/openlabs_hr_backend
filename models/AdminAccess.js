import mongoose from "mongoose";

const adminAccessSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true, // Always require user id to be present
  },
  organisationID: {
    type: String,
    required: true, // Always require organisation id to be present
  },
});

export default mongoose.model("AdminAccess", adminAccessSchema);
