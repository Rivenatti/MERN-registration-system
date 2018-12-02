import { INPUT_CHANGED, SIGNED_IN } from "../actions/actions";

const INITIAL_STATE = {
  username: "",
  email: "",
  organization: "",
  password: "",
  confirmPassword: "",
  errors: {},
  token: false
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGED: {
      return Object.assign({}, state, { [action.name]: action.value });
    }
    case SIGNED_IN: {
      console.log(action.data);
      break;
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
