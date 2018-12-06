import axios from "axios";
import { USER_DELETED } from "../actions/actions";

// Delete user api request
const deleteUser = (dispatch, userId, history) => {
  axios
    .delete(`/delete/${userId}`)
    .then(res => {
      dispatch({ type: USER_DELETED });
      localStorage.removeItem("token");
      delete axios.defaults.headers.common.authorization;
      history.push("/delete");
    })
    .catch(error => console.log(error.response.data.error));
};

export default { deleteUser };
