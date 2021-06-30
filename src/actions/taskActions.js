// import firebase from '../config/firebaseConfig';
export const addTask = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    dispatch({ type: "ADD_CONTACT_REQUEST" });
    console.log("something gets here", task);
    firestore
      .collection("contacts")
      .add(
        task
      )
      
      .then((data) => {
        console.log('no error')
        console.log("CONTACT CREATEED created with ID: ", data.id);
        document.getElementById("addTaskForm").reset();
        dispatch({
          type: "ADD_CONTACT",
          payload: task,
        });
        dispatch({
          type: "ADD_CONTACT_RESET",
         
        });
      })
      .catch((error) => {
        console.log('1 error')
        dispatch({
          type: "ADD_CONTACT_ERR",
          error,
        });
      });
  };
};

export const deleteContact = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("contacts")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: "DELETE_CONTACT",
          payload: id, // task,
        });

        dispatch({
          type: "DELETE_CONTACT",
         
        });
      })
      .catch((err) => {
        dispatch({
          type: "DELETE_CONTACT_ERR",
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
          var id = element.id;
          var data = element.data();
          // tutorials.push({ id: id, title: data.title, description: data.description});
       //   ContactData.push(data);
       ContactData.push({id:id,name:data.name,email:data.email,phonenumber:data.phonenumber});
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
