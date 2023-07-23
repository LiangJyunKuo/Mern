import jwt from "jsonwebtoken";

export const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

//JWT_SECRET represents the secret key used to sign the JWT.
//When creating a JWT, the payload (data) is signed with this secret key to generate a unique token.
//JWT_EXPIRES_IN specifies the expiration time for the JWT.

export const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
