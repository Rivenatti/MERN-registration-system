import {
  INPUT_CHANGED,
  SIGNED_IN,
  SIGNED_OUT,
  USER_DELETED,
  ERROR,
  SIGN_IN_AUTH_FAILED,
  ROUTE_CHANGED,
  SNACKBAR_CLOSE
} from "../actions/actions";
import validate from "../components/Validation/Validation";

const INITIAL_STATE = {
  usernameInput: "",
  emailInput: "",
  organizationInput: "",
  passwordInput: "",
  confirmPasswordInput: "",
  errors: false,
  token: false,
  signInAuthFailed: false
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGED: {
      return validate(state, action.name, action.value);
    }
    case SIGNED_IN: {
      return Object.assign({}, state, {
        token: true,
        signInAuthFailed: false
      });
    }
    case SIGNED_OUT: {
      return Object.assign({}, state, {
        token: false,
        signInAuthFailed: false
      });
    }
    case USER_DELETED: {
      return Object.assign({}, state, {
        emailInput: "",
        passwordInput: "",
        token: false,
        signInAuthFailed: false
      });
    }
    case ERROR: {
      return Object.assign({}, state, {
        usernameInput: "",
        emailInput: "",
        organizationInput: "",
        passwordInput: "",
        confirmPasswordInput: "",
        errors: action.errors,
        signInAuthFailed: false
      });
    }
    case SIGN_IN_AUTH_FAILED: {
      return Object.assign({}, state, {
        signInAuthFailed: true
      });
    }
    case SNACKBAR_CLOSE: {
      return Object.assign({}, state, {
        signInAuthFailed: false
      });
    }
    case ROUTE_CHANGED: {
      return Object.assign({}, state, {
        usernameInput: "",
        emailInput: "",
        organizationInput: "",
        passwordInput: "",
        confirmPasswordInput: "",
        errors: false,
        signInAuthFailed: false
      });
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
