import axios from "axios";
import { SIGNED_IN } from "../actions/actions";

const signIn = (dispatch, email, password, history) => {
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
      axios.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
      history.push("/profile");
    })
    .catch(error => console.log(error.response.data.error));
};

export default { signIn };
