// Require express router
const userLogin = require("express").Router();

// Require bcrypt for hashing
const bcrypt = require("bcryptjs");

// Require user schema
const User = require("../models/User");

// Require JSON Web Token
const jwt = require("jsonwebtoken");

// Require secret key
const secret = require("../../config/secret");

// Create route to specified user by URL params id
userLogin.post("/signin", (req, res, next) => {
  // Check if given email exists
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      // If user doesn't exists send error
      if (!user)
        return res.status(401).json({ error: "Authentication failed." });
      else {
        // Compare requested password with user password
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          // If comparing fails
          if (err)
            return res.status(401).json({ error: "Authentication failed." });
          else if (result) {
            // If success, assign token

            const token = jwt.sign(
              {
                userId: user._id,
                username: user.username,
                organization: user.organization,
                email: user.email,
                created: user.created
              },
              secret,
              {
                expiresIn: "1h"
              }
            );
            // Send response
            return res
              .status(200)
              .json({ message: "Authentication successful", token: token });
          } else
            return res.status(401).json({ error: "Authentication failed." });
        });
      }
    })
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = userLogin;
