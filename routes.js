import express from "express";
import Person from "./models/Employee.js";

const router = express.Router();

const employeeDatabase = [
  { id: "002003", firstName: "Thomas", lastName: "Kensah", grossSalary: 5000 },
  { id: "002004", firstName: "john", lastName: "Samuel", grossSalary: 5050 },
  { id: "002005", firstName: "Jerry", lastName: "Tims", grossSalary: 4000 },
];

// define routes
router.post("/employees", (request, response, next) => {
  const person = new Person({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    gender: request.body.gender,
    age: request.body.age,
  });

  person
    .save()
    .then(() => {
      console.log("data saved");
    })
    .catch(() => {
      console.log("could not save");
    });

  response.json(person);
});

// Read Employees
router.get("/employees", (request, response, next) => {
  const employees = employeeDatabase;
  response.json(employees);
});

// Update Employee
router.patch("/employees/:id", (request, response, next) => {});

// Delete Employee
router.delete("/employees/:id", (request, response, next) => {});

router.get("/employees", (request, response, next) => {
  // fetch all employees from database
  const employees = employeeDatabase;
  // return employees as a JSON array
  response.json(employees);
});

// 404
router.use((request, response) => {
  response.json({ message: "404 Page Not Found" });
});

export default router;
