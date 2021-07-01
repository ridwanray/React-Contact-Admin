import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
// import taskReducer from "./taskReducer";
import authReducer from "./authReducer";
import {
  addContactReducer,
  fetchAllContactReducer,
  fetchIndividualContactReducer,
  deleteContactReducer,
  updateContactReducer,
} from "./taskReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  // task: taskReducer,
  AddContact:addContactReducer,
  FetchAllContact:fetchAllContactReducer,
  FetchIndividualContact:fetchIndividualContactReducer,
  DeleteContact:deleteContactReducer,
  UpdateContact:updateContactReducer,
  auth: authReducer
});

export default rootReducer;
