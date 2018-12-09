import axios from "axios";

// Delete user api request
const deleteUser = (dispatch, userId, history) => {
  console.log(userId);
  axios
    .delete(`/delete/${userId}`)
    .then(res => {
      history.push("/delete");
    })
    .catch(error => console.log(error.response));
};

export default { deleteUser };
