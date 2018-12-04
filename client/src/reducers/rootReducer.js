import {
  INPUT_CHANGED,
  SIGNED_IN,
  SIGNED_OUT,
  USER_DELETED,
  ERROR
} from "../actions/actions";

const INITIAL_STATE = {
  usernameInput: "",
  emailInput: "",
  organizationInput: "",
  passwordInput: "",
  confirmPasswordInput: "",
  errors: {},
  token: false
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGED: {
      return Object.assign({}, state, { [action.name]: action.value });
    }
    case SIGNED_IN: {
      return Object.assign({}, state, {
        token: true
      });
    }
    case SIGNED_OUT: {
      return Object.assign({}, state, {
        token: false
      });
    }
    case USER_DELETED: {
      return Object.assign({}, state, {
        token: false
      });
    }
    case ERROR: {
      return Object.assign({}, state, {
        usernameInput: "",
        emailInput: "",
        organizationInput: "",
        passwordInput: "",
        confirmPasswordInput: "",
        errors: action.errors
      });
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
