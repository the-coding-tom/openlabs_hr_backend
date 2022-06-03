import jwt from "jsonwebtoken";

export const verifyToken = (request, response, next) => {
  try {
    const bearerToken = request.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(bearerToken, process.env.JWT_Secret);

    //Add the ID to the request body
    request.body.userId = decoded.userId;

    next();
  } catch (exception) {
    response
      .status(401)
      .json({ data: {}, errors: [], message: "Token is invalid" });
  }
};

export const verifyAuthorization = (request, response, next) => {};
