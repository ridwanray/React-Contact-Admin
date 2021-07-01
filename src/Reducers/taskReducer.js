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
//////////////hey
case "FETCH_CONTACT_BY_ID_REQUEST": {
  return {FetchingContactByIDLoading: true}
}

case "FETCH_CONTACT_BY_ID": {
  toast("Data Exists For This ID");
  return {
     successDataStatus:true, 
     DataDetailsById: action.payload,
     FetchingContactByIDLoading: false }
}
case "FETCH_CONTACT_ERR": {
  toast.error(action.payload);
  return {FetchingContactByIDLoading: false, error: action.payload }
}
case "UPDATE_CONTACT_BY_ID_REQUEST": {
  return {UpdatingContactByIDLoading: true}
}

case "UPDATE_CONTACT_BY_ID": {
  toast.success("DATA UPDATED");
  return {UpdatingContactByIDLoading: false}
}
 
case "UPDATE_CONTACT_BY_ID_ERR": {
  toast.error("An Error Occured");
  return {UpdatingContactByIDLoading:false}
}
  
    default:
      return state;
  }
};

export default taskReducer;
