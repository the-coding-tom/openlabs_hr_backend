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
  //
  const data = new Response();
  // Get Organization & Admin Details
  const businessName = request.body.businessName;
  const registrationNumber = request.body.registrationNumber;
  const adminEmail = request.body.adminEmail;
  const adminPassword = request.body.adminPassword;
  const adminFirstName = request.body.firstName;
  const adminLastName = request.body.lastName;

  // Find Organization by registration number
  const organizationDetails = await Organisation.findOne({
    registrationNumber,
  }).exec();

  // Exit registration
  if (organizationDetails) {
    data.message =
      "An organization already exists with this registration number.";
    return response.status(400).json(data);
  }

  // Find existing user
  const userData = await User.findOne({
    email: adminEmail,
  }).exec();

  // No existing user
  if (!userData) {
    try {
      const userData = new User({
        email: adminEmail,
        password: adminPassword,
        profile: {
          firstName: adminFirstName,
          lastName: adminLastName,
        },
      });
      await userData.save();
    } catch (exception) {
      data.message = "Failed to create user record.";
      response.status(400).json(data);
    }
  }

  try {
    // New organization
    const organisation = new Organisation({
      businessName: businessName,
      registrationNumber: registrationNumber,
      operationalStatus: "pending-approval",
      administrators: [
        {
          userID: userData._id,
        },
      ],
    });
    await organisation.save();

    data.message = "Onboarding successful. Please check your email.";
    response.status(200).json(data);
  } catch (exception) {
    data.message = "Failed to onboard organization.";
    response.status(400).json(data);
  }
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

router.patch("/user/profile", verifyToken, async (request, response, next) => {
  //
  const data = new Response();
  // Get update data from request.
  const userId = request.body.userId;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  // Find member account.
  const userData = await User.findByIdAndUpdate(userId, {
    "profile.firstName": firstName,
    "profile.lastName": lastName,
  });
  // Response
  data.message = "User update successfull";
  data.data = await User.findById(userId).exec();
  response.status(200).json(data);
});

// 404
router.use((request, response) => {
  response.json({ message: "404 Path Not Found" });
});

export default router;
