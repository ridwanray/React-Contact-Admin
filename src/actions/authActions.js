export const signIn = creds => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      dispatch({ type: "SIGN_IN_REQUEST" })
      firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password)
        .then(() => { 
          dispatch({ type: "SIGN_IN" })      
        })
        .catch(err => {
          console.log('Error Message:',err.message)
          dispatch({ type: "SIGN_IN_ERR", payload:err.message});
        });
    };
  };

  export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
    
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: "SIGN_OUT" });
        });
    };
  };

  export const signUp = creds => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      dispatch({ type: "SIGN_UP_REQUEST" })  
  
      firebase
        .auth()
        .createUserWithEmailAndPassword(creds.email, creds.password)
        .then(() => {
          dispatch({ type: "SIGN_UP" });
        })
        .catch(err => {
          console.log('Error Message:',err.message)
          dispatch({ type: "SIGN_UP_ERR",payload:err.message });
        });
    };
  };

  export const resetPassword = creds => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      dispatch({ type: "RESET_PASSWORD_REQUEST" })  
  
      firebase
        .auth()
        .sendPasswordResetEmail(creds.email)
        .then((data) => {
          console.log('from here', data)
          dispatch({ type: "RESET_PASSWORD" });
        })
        .catch(err => {
          console.log('Error Message:',err.message)
          dispatch({ type: "RESET_PASSWORD_ERR",payload:err.message });
        });
    };
  };


//sendPasswordResetEmail(email);