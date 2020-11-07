/* eslint-disable */
import API from "../utils/API";

// const user = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser")).user
//   ? JSON.parse(localStorage.getItem("currentUser")).email
//   : "";
// const id = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser")).auth_token
//   ? JSON.parse(localStorage.getItem("currentUser")).id
//   : "";

const { email, id } = API.getUser()

export const initialState = {
  user: "" || email,
  id: "" || id,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  // console.log(initialState, action)
  switch (action.type) {
  case "REQUEST_LOGIN":
    return {
      ...initialState,
      loading: true,
    };
  case "LOGIN_SUCCESS":
    return {
      ...initialState,
      user: action.payload.email,
      id: action.payload.id,
      loading: false,
    };
  case "LOGOUT":
    return {
      ...initialState,
      user: "",
      id: "",
    };

  case "LOGIN_ERROR":
    return {
      ...initialState,
      loading: false,
      errorMessage: action.error,
    };

  default:
    throw new Error(`Unhandled action type: ${action.type}`);
  }
};
