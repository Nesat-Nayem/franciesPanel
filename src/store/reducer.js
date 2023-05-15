import { combineReducers } from "redux";

import authenticationReducer from "./authentication"
import servicesReducer from "./services"

export default combineReducers({
  authentication: authenticationReducer,
  services: servicesReducer
  
});
