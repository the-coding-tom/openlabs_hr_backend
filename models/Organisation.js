import mongoose from "mongoose";
import organisationBranchDetailsSchema from "../Schemas/OrganizationBranch.js";

const administrator = mongoose.Schema({
  userID: {
    type: String,
    required: true, // Always require user id to be present
  },
});

const organisationSchema = mongoose.Schema({
  businessName: {
    type: String,
    required: true, // Always require user id to be present
  },
  registrationNumber: {
    type: String,
    required: true, // Always require organisation id to be present
  },
  operationalStatus: { type: String, required: true },
  administrators: {
    type: [administrator],
  },
  branches: {
    type: [organisationBranchDetailsSchema],
  },
});

export default mongoose.model("Organisation", organisationSchema);
