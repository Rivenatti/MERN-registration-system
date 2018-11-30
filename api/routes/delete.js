// Require express router
const deleteUser = require("express").Router();

// Require user schema
const User = require("../models/User");

// Require authentication
const Authenticate = require("../authentication/authenticate");

// Create route to specified user by URL params id
deleteUser.delete("/:userId", Authenticate, (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .then(result => res.status(200).json({ message: "User has been deleted." }))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = deleteUser;
