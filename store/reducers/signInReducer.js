import * as loginActions from "../actions";

// const USER = {
//   pat: null,
//   name: null,
//   email: null,
//   user_id: null
// };

const initialState = {
    pat: null,
    name: null,
    email: null,
    user_id: null
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": 
       return {
           ...state,
           name: action.user.user.name,
           email: action.user.user.email,
           pat: action.user.token,
           user_id: action.user.user.id,
       }
    default:
      return state;
  }
  return state;
};

export default signInReducer;
