import mongoose from "mongoose";

const transferRequestSchema = mongoose.Schema({
  employeeID: {
    type: String,
    required: true, // Always require employee id to be present
  },
  requestDateTime: {
    type: String,
    required: true, // Always require request date time to be present
  },
  purpose: {
    type: String,
    required: true, // Always require purpose to be present
  },
  approvalDate: {
    type: String,
    required: true, // Always require approval date to be present
  },
  authorisedBy: {
    type: String,
    required: true, // Always require "authorised by" to be present
  },
  transferType: {
    type: String,
    required: true, // Always require transfer type to be present
  },
  originatingFrom: {
    type: String,
    required: true, // Always require originating from to be present
  },
  destination: {
    type: String,
    required: true, // Always require destination to be present
  },
  status: {
    type: String,
    required: true, // Always require status to be present
  },
});

export default mongoose.model("TransferRequest", transferRequestSchema);
