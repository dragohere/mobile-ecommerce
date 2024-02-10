import { GET_USER_DETAILS } from "./userDetailsTypes";
const userDetails = [];
const getUserDetails = (state = userDetails, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      sessionStorage.setItem("userDetails",JSON.stringify(action.payload))
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};
export default getUserDetails;
