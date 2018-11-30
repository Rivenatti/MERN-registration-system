// Require express router
const createUser = require("express").Router();

// Require bcrypt for hashing
const bcrypt = require("bcryptjs");

// Require user schema
const User = require("../models/User");

// Create route to '/signup'
createUser.post("/signup", (req, res) => {
  // Assign request values to the variables
  const { username, organization, email, password } = req.body;

  // Check if all required fields are filled in
  if (!username)
    return res.status(400).json({ error: "Username field is empty." });
  else if (!organization)
    return res.status(400).json({ error: "Organization field is empty." });
  else if (!email)
    return res.status(400).json({ error: "Email field is empty." });
  else if (!password)
    return res.status(400).json({ error: "Password field is empty." });

  // If email exists show message, else encrypt password and save user in the db
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user)
      return res
        .status(409)
        .json({ email: "Given email already exists in the database." });
    else {
      // Create new user instance with given schema
      const newUser = new User({
        username: req.body.username,
        organization: req.body.organization,
        email: req.body.email,
        password: req.body.password
      });

      // Encrypt the password
      bcrypt.genSalt(10, (err, salt) => {
        if (err) res.status(500).json({ error: err });
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) res.status(500).json({ error: err });
            else {
              newUser.password = hash;

              // Save user in the database
              newUser
                .save()
                .then(result =>
                  res
                    .status(201)
                    .json({ message: "User has been successfully created." })
                )
                .catch(err => res.status(500).json({ error: err }));
            }
          });
        }
      });
    }
  });
});
module.exports = createUser;
