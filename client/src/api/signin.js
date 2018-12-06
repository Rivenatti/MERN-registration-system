import axios from "axios";
import { SIGNED_IN, SIGN_IN_AUTH_FAILED } from "../actions/actions";

// Sign in api request
const signIn = (dispatch, email, password, history) => {
  axios
    .post("/signin", {
      email: email,
      password: password
    })
    .then(res => {
      // Set token in the store
      dispatch({ type: SIGNED_IN, token: res.data.token });
      // Set token in the browser localStorage
      localStorage.setItem("token", res.data.token);
      // Set token in the browser header
      axios.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
      // Redirect user to the profile page
      history.push("/profile");
    })
    .catch(error =>
      // Set the errors in the store
      dispatch({
        type: SIGN_IN_AUTH_FAILED,
        errors: { authFailed: error.response.data }
      })
    );
};

export default { signIn };
