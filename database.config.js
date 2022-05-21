import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(process.env.DATABASE_CONNECTION_STRING)
    .then(() => {
      console.log("Database connected!!");
    })
    .catch(() => {
      console.log("Failed to connect to database");
    });
};

export default { connect };
