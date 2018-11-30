// Require JSON Web Token
const jwt = require("jsonwebtoken");

// Require secret key
const secret = require("../../config/secret");

module.exports = (req, res, next) => {
  // Get token from the browser header (without "Bearer" at the beginning)
  const token = req.headers.authorization.split(" ")[1];

  // Decode token and verify
  try {
    const decodedToken = jwt.verify(token, secret.KEY);
    req.useData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed." });
  }
};
