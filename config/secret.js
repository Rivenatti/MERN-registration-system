if (process.env.NODE_ENV === "development") {
  module.exports = require("./config").KEY;
} else {
  module.exports = process.env.SECRET_KEY;
}
