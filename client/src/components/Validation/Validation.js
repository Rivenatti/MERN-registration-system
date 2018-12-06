// Validation

// Regular expressions
const usernameRegEx = RegExp(/^[a-zA-Z0-9_-]{3,16}$/);
const organizationRegEx = RegExp(/^[a-zA-Z0-9_-]{3,16}$/);
const emailRegEx = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const passwordRegEx = RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/
);

// Validation
export default function validate(state, name, value) {
  switch (name) {
    // -------------------- USERNAME INPUT VALIDATION --------------------
    case "usernameInput": {
      if (usernameRegEx.test(value)) {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, username: false, usernameExists: false }
        });
      } else if (value === "") {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, username: false, usernameExists: false }
        });
      } else {
        return Object.assign({}, state, {
          [name]: value,
          errors: {
            ...state.errors,
            username: true,
            usernameExists: false
          }
        });
      }
    }
    // -------------------- ORGANIZATION INPUT VALIDATION --------------------
    case "organizationInput": {
      if (organizationRegEx.test(value)) {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, organization: false }
        });
      } else if (value === "") {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, organization: false }
        });
      } else {
        return Object.assign({}, state, {
          [name]: value,
          errors: {
            ...state.errors,
            organization: true
          }
        });
      }
    }
    // -------------------- EMAIL INPUT VALIDATION --------------------
    case "emailInput": {
      if (emailRegEx.test(value)) {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, email: false, emailExists: false }
        });
      } else if (value === "") {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, email: false, emailExists: false }
        });
      } else {
        return Object.assign({}, state, {
          [name]: value,
          errors: {
            ...state.errors,
            email: true,
            emailExists: false
          }
        });
      }
    }

    // -------------------- PASSWORD INPUT VALIDATION --------------------
    case "passwordInput": {
      if (passwordRegEx.test(value)) {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, password: false }
        });
      } else if (value === "") {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, password: false }
        });
      } else {
        return Object.assign({}, state, {
          [name]: value,
          errors: {
            ...state.errors,
            password: true
          }
        });
      }
    }

    // -------------------- CONFIRM PASSWORD INPUT VALIDATION --------------------
    case "confirmPasswordInput": {
      if (value === state.passwordInput) {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, confirmPassword: false }
        });
      } else if (value === "") {
        return Object.assign({}, state, {
          [name]: value,
          errors: { ...state.errors, confirmPassword: false }
        });
      } else {
        return Object.assign({}, state, {
          [name]: value,
          errors: {
            ...state.errors,
            confirmPassword: true
          }
        });
      }
    }

    // -------------------- DEFAULT ERROR --------------------
    default:
      return Object.assign({}, state, {
        [name]: value,
        errors: true
      });
  }
}
