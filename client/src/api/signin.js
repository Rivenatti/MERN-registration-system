import axios from "axios";
import { SIGNED_IN } from "../actions/actions";

const signIn = (dispatch, email, password) => {
  axios
    .post("/signin", {
      email: email,
      password: password
    })
    .then(res => {
      const action = {
        type: SIGNED_IN,
        token: res.data.token
      };
      dispatch(action);
      localStorage.setItem("token", res.data.token);
    })
    .catch(error => console.log(error.response.data.error));
};

export default { signIn };
