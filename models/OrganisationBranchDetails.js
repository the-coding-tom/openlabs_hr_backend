import mongoose from "mongoose";

const organisationBranchDetailsSchema = mongoose.Schema({
  organisationID: {
    type: String,
    required: true, // Always require user id to be present
  },
  branchType: {
    type: String,
    required: true, // Always require organisation id to be present
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
  },
});

export default mongoose.model(
  "OrganisationBranchDetails",
  organisationBranchDetailsSchema
);
