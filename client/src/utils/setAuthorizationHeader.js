import axios from "axios";

// At the page reload, check for token in the browser
export default (token = null) => {
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
