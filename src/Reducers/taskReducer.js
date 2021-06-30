import { toast } from "react-toastify";

const taskReducer = (state = { contacts: []}, action) => {
  switch (action.type) {
    case "ADD_CONTACT_REQUEST": {
      return {AddingContactLoading: true }
    }

    case "ADD_CONTACT": {
      toast.success("New Contact Successfully Added");
      return {
        //uploadedfile: action.payload
         newaddedcontact: action.payload,
         AddingContactLoading: false,
         ContactAddedSuccesssStatus: true,
         }
    }
    case "ADD_CONTACT_ERR": {
      toast.error("An error occurred");
      return {...state, AddingContactLoading: false }
    }

    // case "ADD_CONTACT_RESET": {
    //   return {}
    // }
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
    case "DELETE_CONTACT": {
      toast.warn("Contact was deleted....");
      return {    
         deletedContactId: action.payload,
         ContactDeletedSuccesssStatus: true,
         }
    }
    case "DELETE_CONTACT_ERR": {
      toast.error(action.payload);
      return state;
    }

    case "DELETE_CONTACT_RESET": {
      return {};
    }
  
    default:
      return state;
  }
};

export default taskReducer;
