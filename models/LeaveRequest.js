import mongoose from "mongoose";

const leaveRequestSchema = mongoose.Schema({
  employeeID: {
    type: String,
    required: true, // Always require employee id to be present
  },
  start: {
    type: String,
    required: true, // Always require start to be present
  },
  end: {
    type: Number,
    required: true, // Always require end to be present
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
  status: {
    type: String,
    required: true, // Always require status to be present
  },
});

export default mongoose.model("LeaveRequest", leaveRequestSchema);
