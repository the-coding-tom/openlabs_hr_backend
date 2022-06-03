import express from "express";
import User from "./models/User.js";
import bcrypt from "bcrypt";
import { verifyToken } from "./middleware/tokenizer.js";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

const router = express.Router();

// Admin Routes (Group)
router.post("/auth/admin", async (request, response, next) => {
  // Get login data
  const email = request.body.email;
  const password = request.body.password;
  const returnData = { data: {}, errors: [], message: "" };

  try {
    // Find email in database
    const userData = await User.findOne({ email: email }).exec();

    // Compare passwords
    const isMatch = await bcrypt.compare(password, userData.password);

    if (!isMatch) {
      //Return error response
      returnData.message =
        "User password does not match. Please check the password entered.";
      response.status(401).json(returnData);
    }

    // Generate JWT token
    const token = jwt.sign({ userId: userData._id }, process.env.JWT_Secret);

    // Return success response
    returnData.message = "User Authentication successfull";
    returnData.data = {
      id: userData._id,
      token,
    };

    response.status(200).json(returnData);
  } catch (exception) {
    // Resource not found (User resource)
    returnData.message =
      "User email does not exist. Please check the email entered.";
    response.status(404).json(returnData);
  }

  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   bcrypt.hash(password, salt, function (err, hash) {
  //     // Store hash in your password DB.
  //     console.log(hash);
  //   });
  // });
});

// Employee Routes (Group)

// General Routes (Group)

// // define routes
// router.post("/employees", (request, response, next) => {
//   const person = new Person({
//     firstName: request.body.firstName,
//     lastName: request.body.lastName,
//     gender: request.body.gender,
//     age: request.body.age,
//   });

//   person
//     .save()
//     .then(() => {
//       console.log("data saved");
//     })
//     .catch(() => {
//       console.log("could not save");
//     });

//   response.json(person);
// });

// // Read Employees
// router.get("/employees", (request, response, next) => {
//   const employees = employeeDatabase;
//   response.json(employees);
// });

// // Update Employee
// router.patch("/employees/:id", (request, response, next) => {});

// // Delete Employee
// router.delete("/employees/:id", (request, response, next) => {});

// 404
router.use((request, response) => {
  response.json({ message: "404 Page Not Found" });
});

export default router;
