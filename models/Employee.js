import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true, // Always require user id to be present
  },
  organisationID: {
    type: String,
    required: true, // Always require organisation id to be present
  },
  jobTitle: {
    type: String,
    required: true, // Always require job title to be present
  },
  staffNumber: {
    type: String,
    required: true, // Always require staff number to be present
  },
  dateEmployed: {
    type: Date,
    required: true, // Always require user id to be present
  },
  department: {
    type: String,
    required: true, // Always require department to be present
  },
  employmentEndDate: {
    type: Date,
    required: true, // Always require employment end date to be present
  },
  branchID: {
    type: String,
    required: true, // Always require branch id to be present
  },
  grossSalary: {
    type: Number,
    required: true, // Always require gross salary to be present
  },
  bankName: {
    type: String,
    required: true, // Always require bank name to be present
  },
  bankAccountNumber: {
    type: String,
    required: true, // Always require bank account number to be present
  },
  bankBranch: {
    type: String,
    required: true, // Always require bank branch to be present
  },
  IBAN: {
    type: Date,
  },
  swiftCode: {
    type: String,
  },
  taxes: {
    type: [],
  },
});

export default mongoose.model("Employee", employeeSchema);
