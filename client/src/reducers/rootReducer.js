import { CURRENT_USER } from "../actions/actions";

const INITIAL_STATE = {
  username: "",
  email: "",
  organization: "",
  password: "",
  confirmPassword: "",
  errors: {}
};

const rootReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default rootReducer;
