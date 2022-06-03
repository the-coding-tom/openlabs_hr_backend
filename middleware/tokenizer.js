import jwt from "jsonwebtoken";

export const verifyToken = (request, response, next) => {
  try {
    const bearerToken = request.header("Authorization").replace("Bearer ", "");
    console.log(bearerToken);
    const decoded = jwt.verify(bearerToken, process.env.JWT_Secret);
    console.log(decoded);

    //Add the ID to the request body
    request.body.userId = decoded.userId;
    next();
  } catch (exception) {
    response.status(401).json({});
  }
};

export const verifyAuthorization = (request, response, next) => {};
