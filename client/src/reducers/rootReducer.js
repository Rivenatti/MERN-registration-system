// Actions
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

// Initial state
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

// Root reducer
const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Forms input handler with input validation
    case INPUT_CHANGED: {
      return validate(state, action.name, action.value);
    }

    // After user signs in, set the token and remove and errors if any
    case SIGNED_IN: {
      return Object.assign({}, state, {
        token: true,
        signInAuthFailed: false
      });
    }

    // After user signs out, remove the token and errors if any
    case SIGNED_OUT: {
      return Object.assign({}, state, {
        token: false,
        signInAuthFailed: false
      });
    }

    // After user deletes account, clear previous input from the state, remove token and errors if any
    case USER_DELETED: {
      return Object.assign({}, state, {
        emailInput: "",
        passwordInput: "",
        token: false,
        signInAuthFailed: false
      });
    }

    // If druing server or client validation any error occurs, then set it in the state and clear all inputs
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

    // If during sign in server returns authentication error, display warning snackbar
    case SIGN_IN_AUTH_FAILED: {
      return Object.assign({}, state, {
        signInAuthFailed: true
      });
    }

    // Sign in auth fail snackbar close handler
    case SNACKBAR_CLOSE: {
      return Object.assign({}, state, {
        signInAuthFailed: false
      });
    }

    // During page change reset the state
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
