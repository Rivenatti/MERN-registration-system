import axios from "axios";
import { SIGNED_IN, SIGN_IN_AUTH_FAILED } from "../actions/actions";

const signIn = (dispatch, email, password, history) => {
  axios
    .post("/signin", {
      email: email,
      password: password
    })
    .then(res => {
      dispatch({ type: SIGNED_IN, token: res.data.token });
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
      history.push("/profile");
    })
    .catch(error =>
      dispatch({
        type: SIGN_IN_AUTH_FAILED,
        errors: { authFailed: error.response.data }
      })
    );
};

export default { signIn };
