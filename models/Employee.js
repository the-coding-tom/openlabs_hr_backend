import mongoose from "mongoose";

const personSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  age: Number,
});

export default mongoose.model("Person", personSchema);
