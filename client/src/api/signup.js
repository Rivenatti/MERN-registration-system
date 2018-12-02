import axios from "axios";

const signUp = (dispatch, username, organization, email, password) => {
  axios
    .post("/signup", {
      username: username,
      organization: organization,
      email: email,
      password: password
    })
    .then(res => console.log(res.data.message))
    .catch(error => console.log(error.response.data.error));
};

export default { signUp };
