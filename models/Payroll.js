import mongoose from "mongoose";

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

export default mongoose.model("Payroll", payrollSchema);
