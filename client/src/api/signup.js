import axios from "axios";
import { ERROR } from "../actions/actions";

// Sign up api request
const signUp = (dispatch, username, organization, email, password, history) => {
  axios
    .post("/signup", {
      username,
      organization,
      email,
      password
    })
    .then(res => {
      // Redirect user to sign in page after success
      history.push("/signin");
    })
    .catch(error => {
      // If email exists in the db
      if (error.response.data.emailExists) {
        dispatch({
          type: ERROR,
          errors: { emailExists: error.response.data.emailExists }
        });
      }

      // If username exists in the db
      if (error.response.data.usernameExists) {
        dispatch({
          type: ERROR,
          errors: { usernameExists: error.response.data.usernameExists }
        });
      }

      // If server side validation errors
      else {
        dispatch({ type: ERROR, errors: error.response.data.error.errors });
      }
    });
};

export default { signUp };
