import express from "express";
import User from "./models/User.js";
import bcrypt from "bcrypt";

const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

const router = express.Router();

// Admin Routes (Group)
router.post("/auth/admin", async (request, response, next) => {
  // Get login details
  const email = request.body.email;
  const password = request.body.password;

  // Find email in database
  const userData = await User.find({ email: email }).exec();

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      // Store hash in your password DB.
      bcrypt.compare("pass1234", hash, function (err, result) {
        console.log(result);
      });
    });
  });

  // Compare passwords
  // Send response
  response.json({});
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
