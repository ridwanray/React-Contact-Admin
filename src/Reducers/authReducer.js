import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN_REQUEST":
      return {loading: true }
    case "SIGN_IN":
      toast.success("Successfully Login");
      return {...state, loading: false }
      
    case "SIGN_IN_ERR":
      toast.warning(action.payload);
      return {...state, loading: false }
    
    case "SIGN_OUT":
      toast("You signed out..");
      return state;
    case "SIGN_UP_REQUEST":
      return { SignUploading: true }
    case "SIGN_UP":
      toast.success("You have successfully created an account");
      return {...state, SignUploading: false };
    case "SIGN_UP_ERR":
      toast.error(action.payload);
      return {...state, SignUploading: false };
      case "RESET_PASSWORD_REQUEST":
        return { ResetPasswordloading: true }
      case "RESET_PASSWORD":
        toast.success("Email with instructions sent!");
        return {...state, ResetPasswordloading: false };
      case "RESET_PASSWORD_ERR":
        toast.error(action.payload);
        return {...state, ResetPasswordloading: false };
    default:
      return state; 
  }
};

export default authReducer;
