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

const payrollSchema = mongoose.Schema({
  employeeID: {
    type: String,
    required: true, // Always require email to be present
  },
  bonus: {
    type: Number,
    required: true, // Always require bonus to be present
  },
  netSalary: {
    type: Number,
    required: true, // Always require net salary to be present
  },
  paymentDate: {
    type: Date,
    required: true, // Always require payment date to be present
  },
  status: {
    type: String,
    required: true, // Always require status to be present
  },
});

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

const employeeSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true, // Always require user id to be present
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
  employees: {
    type: [employeeSchema],
  },
  leaveRequests: {
    type: [leaveRequestSchema],
  },
  payroll: {
    type: [payrollSchema],
  },
  transferRequests: {
    type: [transferRequestSchema],
  },
});

export default organisationBranchDetailsSchema;
