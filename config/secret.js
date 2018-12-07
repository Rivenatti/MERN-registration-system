if (process.env.NODE_ENV === "development") {
  module.exports = require("./config");
} else {
  module.exports = process.env.SECRET_KEY;
}
