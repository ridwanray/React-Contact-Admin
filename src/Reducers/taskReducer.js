import { toast } from "react-toastify";

const taskReducer = (state = { contacts: []}, action) => {
  switch (action.type) {
    case "ADD_CONTACT_REQUEST": {
      return {AddingContactLoading: true }
    }

    case "ADD_CONTACT": {
      toast.success("New Contact Successfully Added");
      return {
         contacts: action.payload,
         AddingContactLoading: false }
    }
    case "ADD_CONTACT_ERR": {
      toast.error("An error occurred");
      return {...state, AddingContactLoading: false }
    }
    case "FETCH_CONTACT_REQUEST": {
      return {FetchningContactLoading: true,  contacts: [] }
    }

    case "FETCH_CONTACT": {
      toast("Data Loaded From DB");
      return {
         contacts: action.payload,
         FetchningContactLoading: false }
    }
    case "FETCH_CONTACT_ERR": {
      toast.error(action.payload);
      return {FetchningContactLoading: false, error: action.payload }
    }
    case "REMOVE_CONTACT": {
      toast.warn("Contact was deleted...");
      return state;
    }
    case "REMOVE_CONTACT_ERR": {
      toast.error("An error occurred. Unable to delete contact");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.info("A task status changed...");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("A task status change error occured...");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
