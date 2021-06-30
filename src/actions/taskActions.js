// import firebase from '../config/firebaseConfig';
export const addTask = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    dispatch({ type: "ADD_CONTACT_REQUEST" });
    console.log("something gets here", task);

    // const todoRef = firebase.database().ref('Todo');
    // todoRef.push(task)
    firestore
      .collection("contacts")
      .add({
        task,
      })

      .then(() => {
        dispatch({
          type: "ADD_CONTACT",
          payload: task, // task,
        });
      })
      .catch((error) => {
        console.log("hope  is here");
        dispatch({
          type: "ADD_CONTACT_ERR",
          error,
        });
      });
  };
};

export const removeTask = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("tasks")
      .doc(task.id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_CONTACT",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_CONTACT_ERR",
          err,
        });
      });
  };
};

export const toggleChecked = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // querySnapshot.forEach(element => {
    //   var data = element.data();
    //   setInfo(arr => [...arr , data]);

    firestore
      .collection("tasks")
      .doc(task.id)
      .set(
        {
          ...task,
          checked: !task.checked,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "TOGGLE_CHECKED",
          task,
        });
      })
      .catch((err) => {
        dispatch({
          type: "TOGGLE_CHECKED_ERR",
          err,
        });
      });
  };
};

// querySnapshot.forEach(element => {
//   var data = element.data();
//   setInfo(arr => [...arr , data]);

// import firebase from '../config/firebaseConfig';
export const fetchContact = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    dispatch({ type: "FETCH_CONTACT_REQUEST" });
    console.log("fetching contact..........");
    firestore
      .collection("contacts")
      .get()
      .then((querySnapshot) => {
       const ContactData = [];
        querySnapshot.forEach((element) => {
          var data = element.data();
          ContactData.push(data);
        });
        console.log(ContactData);
        
        dispatch({    
          type: "FETCH_CONTACT",
          payload:ContactData,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_CONTACT_ERR",
          payload:error.message
         
        });
      });
  };
};
