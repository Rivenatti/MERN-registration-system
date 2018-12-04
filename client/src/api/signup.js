import axios from "axios";
import { ERROR } from "../actions/actions";

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
      console.log(error.response.data);
      // If one error
      if (error.response.data.error) {
        dispatch({
          type: ERROR,
          errors: { serverError: error.response.data.error }
        });
      }
      // If multiple errors
      else {
        dispatch({ type: ERROR, errors: error.response.data.error.errors });
      }
    });
};

export default { signUp };
