import express from "express";
import User from "./models/User.js";
import Organisation from "./models/Organisation.js";
import bcrypt from "bcrypt";
import { verifyToken } from "./middleware/tokenizer.js";
import jwt from "jsonwebtoken";
import Response from "./helpers/ResponseData.js";

const router = express.Router();

router.post("/auth/admin", async (request, response, next) => {
  //
  const data = new Response();
  // Get login data
  const email = request.body.email;
  const password = request.body.password;

  try {
    // Find email
    const userData = await User.findOne({ email: email }).exec();

    // Compare passwords
    const isMatch = await bcrypt.compare(password, userData.password);

    //Return error response
    if (!isMatch) {
      data.message =
        "User password does not match. Please check the password entered.";
      response.status(401).json(data);
    }

    // Find admin record
    const adminOfOrganisations = await Organisation.find({
      "administrators.userID": userData._id,
    }).exec();

    if (adminOfOrganisations.length === 0) {
      data.message =
        "User is not authorised to be an administrator. Please check the details entered.";
      response.status(401).json(data);
    }

    // Generate JWT token
    const token = jwt.sign({ userId: userData._id }, process.env.JWT_Secret);

    // Return success response
    data.message = "User Authentication successfull";
    data.data = {
      id: userData._id,
      token,
      organizations: adminOfOrganisations.map((organization) => {
        return {
          id: organization._id,
          businessName: organization.businessName,
          registrationNumber: organization.registrationNumber,
        };
      }),
    };
    response.status(200).json(data);
  } catch (exception) {
    data.message = "User email does not exist. Please check the email entered.";
    response.status(404).json(data);
  }
});

router.post("/auth/onboard-company", async (request, response, next) => {
  // Get Organization & Admin Details
  // Find Organization by registration number
  // Exit onboarding if organization already exists
  // Create new organization
  // Add branch details
  // Add user details
  // Add admin details
  // Send response.
  // const saltRounds = 10;
  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   bcrypt.hash(password, salt, function (err, hash) {
  //     // Store hash in your password DB.
  //     console.log(hash);
  //   });
  // });
});

router.post("/auth/employee", async (request, response, next) => {
  //
  const data = new Response();
  // Get login data
  const email = request.body.email;
  const password = request.body.password;

  try {
    // Find email
    const userData = await User.findOne({ email: email }).exec();

    // Compare passwords
    const isMatch = await bcrypt.compare(password, userData.password);

    //Return error response
    if (!isMatch) {
      data.message =
        "User password does not match. Please check the password entered.";
      response.status(401).json(data);
    }

    // Generate JWT token
    const token = jwt.sign({ userId: userData._id }, process.env.JWT_Secret);

    // Return success response
    data.message = "User Authentication successfull";
    data.data = {
      id: userData._id,
      token,
    };
    response.status(200).json(data);
  } catch (exception) {
    data.message = "User email does not exist. Please check the email entered.";
    response.status(404).json(data);
  }
});

router.patch("/user/:userId/profile", async (request, response, next) => {
  //
});

// 404
router.use((request, response) => {
  response.json({ message: "404 Path Not Found" });
});

export default router;
