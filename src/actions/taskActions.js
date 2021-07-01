// import firebase from '../config/firebaseConfig';
export const addTask = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    dispatch({ type: "ADD_CONTACT_REQUEST" });
    console.log("something gets here", task);
    firestore
      .collection("contacts")
      .add(task)

      .then((data) => {
        console.log("no error");
        console.log("CONTACT CREATEED created with ID: ", data.id);
        document.getElementById("addTaskForm").reset();
        dispatch({
          type: "ADD_CONTACT",
          payload: task,
        });
        // dispatch({
        //   type: "ADD_CONTACT_RESET",

        // });
      })
      .catch((error) => {
        console.log("1 error");
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
          ContactData.push({
            id: id,
            name: data.name,
            email: data.email,
            phonenumber: data.phonenumber,
          });
        });
        console.log(ContactData);

        dispatch({
          type: "FETCH_CONTACT",
          payload: ContactData,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_CONTACT_ERR",
          payload: error.message,
        });
      });
  };
};

// var ref = firebase.firestore().collection('restaurants').doc(yourDocId).get()

export const fetchContactByID = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // dispatch({ type: "FETCH_CONTACT_REQUEST" });
    console.log("fetching contact id by..........");
    firestore
      .collection("contacts")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          dispatch({
          type: "FETCH_CONTACT_BY_ID",
          payload:doc.data()
        });
          
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          dispatch({
            type: "FETCH_CONTACT_ERR",
            payload:'No Data Exists For Provided ID'
          });
        }
      })
      .catch((error) => {
        console.log("there is an error", error);
        dispatch({
          type: "FETCH_CONTACT_ERR",
          payload:error
        });
      });
  };
};


export const updateContactByID = (id,
  name,
  phonenumber,
  email) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    dispatch({ type: "UPDATE_CONTACT_BY_ID_REQUEST" });
    console.log("fetching contact id by..........");
    firestore
      .collection("contacts")
      .doc(id)
      .update({name:name,email:email,phonenumber:phonenumber})
      .then((doc) => {
        dispatch({
          type: "UPDATE_CONTACT_BY_ID",
         
          });
      })
      .catch((error) => {
        console.log("there is an error", error);
        dispatch({
          type: "UPDATE_CONTACT_BY_ID_ERR",
          payload:error
        });
      });
  };
};