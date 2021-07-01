import { toast } from "react-toastify";

// const taskReducer = (state = { contacts: []}, action) => {
//   switch (action.type) {
//     case "ADD_CONTACT_REQUEST": {
//       return {AddingContactLoading: true }
//     }

//     case "ADD_CONTACT": {
//       toast.success("New Contact Successfully Added");
//       return {
//         //uploadedfile: action.payload
//          newaddedcontact: action.payload,
//          AddingContactLoading: false,
//          ContactAddedSuccesssStatus: true,
//          }
//     }
//     case "ADD_CONTACT_ERR": {
//       toast.error("An error occurred");
//       return {...state, AddingContactLoading: false }
//     }

//     // case "ADD_CONTACT_RESET": {
//     //   return {}
//     // }
//     case "FETCH_CONTACT_REQUEST": {
//       return {FetchningContactLoading: true,  contacts: [] }
//     }

//     case "FETCH_CONTACT": {
//       toast("Data Loaded From DB");
//       return {
//          contacts: action.payload,
//          FetchningContactLoading: false }
//     }
//     case "FETCH_CONTACT_ERR": {
//       toast.error(action.payload);
//       return {FetchningContactLoading: false, error: action.payload }
//     }
//     case "DELETE_CONTACT": {
//       toast.warn("Contact was deleted....");
//       return {
//          deletedContactId: action.payload,
//          ContactDeletedSuccesssStatus: true,
//          }
//     }
//     case "DELETE_CONTACT_ERR": {
//       toast.error(action.payload);
//       return state;
//     }
// //////////////hey
// case "FETCH_CONTACT_BY_ID_REQUEST": {
//   return {FetchingContactByIDLoading: true}
// }

// case "FETCH_CONTACT_BY_ID": {
//   toast("Data Exists For This ID");
//   return {
//      successDataStatus:true,
//      DataDetailsById: action.payload,
//      FetchingContactByIDLoading: false }
// }
// case "FETCH_CONTACT_BY_ID_ERR": {
//   toast.error(action.payload);
//   return {FetchingContactByIDLoading: false, error: action.payload }
// }
// case "UPDATE_CONTACT_BY_ID_REQUEST": {
//   return {UpdatingContactByIDLoading: true}
// }

// case "UPDATE_CONTACT_BY_ID": {
//   toast.success("DATA UPDATED");
//   return {UpdatingContactByIDLoading: false}
// }

// case "UPDATE_CONTACT_BY_ID_ERR": {
//   toast.error("An Error Occured");
//   return {UpdatingContactByIDLoading:false}
// }

//     default:
//       return state;
//   }
// };

// export default taskReducer;
/////////////////////////ALL NEW REDUCERS
// ADD CONTACT REDUCER
// FETCH CONTACT REDUCER
// FETCH INDIVIDUAL CONTACT REDUCER
// DELETE CONTACT REDUCER
// UPDATE CONTACT REDUCER

export const addContactReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CONTACT_REQUEST":
      
      return { AddingContactLoading: true };

    case "ADD_CONTACT_SUCCESS":
      toast.success("New Contact Successfully Added");
      return {
        newaddedcontact:action.payload, //.task, // {id:'sdofdofdf',name:'reud',email:'myem@',phonenumber:'dsd'},
        AddingContactLoading: false,
        ContactAddedSuccessStatus: true,
      };

    case "ADD_CONTACT_ERR":
        toast.error("An error occurred");
        return {...state, AddingContactLoading: false }
            
    case "ADD_CONTACT_RESET":
      let { newaddedcontact } = state;
      return { newaddedcontact };







    default:
      return state;
  }
};

export const fetchAllContactReducer = (
  state = { contacts: [] },
  action
) => {
  switch (action.type) {
    case "FETCH_CONTACT_REQUEST":
    return {FetchningContactLoading: true, contacts: []}

    case "FETCH_CONTACT_SUCCESS":
        toast("Data Loaded From DB");
        return {
        contacts: action.payload,
        FetchningContactLoading: false 
    }

    case "FETCH_CONTACT_ERR":
        toast.error(action.payload);
        return {FetchningContactLoading: false, error: action.payload }

    case "FETCH_CONTACT_RESET":
      return {};

    default:
      return state;
  }
};

export const fetchIndividualContactReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case "FETCH_CONTACT_BY_ID_REQUEST":
        return {FetchingContactByIDLoading: true};

    case "FETCH_CONTACT_BY_ID_SUCCESS":
        toast("Data Exists For This ID");
          return {
             successDataStatus:true,
             DataDetailsById: action.payload,
             FetchingContactByIDLoading: false }

    case "FETCH_CONTACT_BY_ID_ERR":
        toast.error(action.payload);
        return {FetchingContactByIDLoading: false, error: action.payload}

    case "FETCH_CONTACT_BY_ID_RESET":
      return {};

    default:
      return state;
  }
};

export const deleteContactReducer = (state = { }, action) => {
  switch (action.type) {
    case "DELETE_CONTACT_REQUEST":
      return { loading: true };

    case "DELETE_CONTACT_SUCCESS":
        toast.warn("Contact was deleted....");
        return {
        deletedContactId: action.payload,
        ContactDeletedSuccesssStatus: true,
        }

    case "DELETE_CONTACT_ERR":
        toast.error(action.payload);
        return state;

    case "DELETE_CONTACT_RESET":
      return {};

    default:
      return state;
  }
};

export const updateContactReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_CONTACT_BY_ID_REQUEST":
        return {UpdatingContactByIDLoading: true}

    case "UPDATE_CONTACT_BY_ID_SUCCESS":
        toast.success("DATA UPDATED");
        return {UpdatingContactByIDLoading: false}

    case "UPDATE_CONTACT_BY_ID_ERR":
        toast.error("An Error Occured");
        return {UpdatingContactByIDLoading:false}

    case "UPDATE_CONTACT_BY_ID_RESET":
      return {};

    default:
      return state;
  }
};
