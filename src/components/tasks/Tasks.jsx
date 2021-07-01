// import React from "react";
import Task from "./Task";
import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact,deleteContact } from "../../actions/taskActions";

function Tasks({history}) {
  const dispatch = useDispatch();
  const contactInfo = useSelector((state) => state.FetchAllContact);
  const { FetchningContactLoading,contacts,error,success } = contactInfo;

  const deleteAContact = (id) => {
    if (window.confirm("You are about to delete this contact. Are you sure?")) {
      console.log("to be deleted", id);
      dispatch(deleteContact(id));
    }
  };

  useEffect(() => {
    // fetchContact();
    dispatch(fetchContact());
    console.log('coming from task effect')
  }, [dispatch,history])
  
  return (
    <>
      <table
        className="table  bg-light container"
        style={{ marginTop: "10px" }}
      >
        <thead>
          <tr className="text-dark">
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email Address</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          
        {/* {FetchningContactLoading ? 'Loading data...':''}

        {success && 
        <Task
                              
        deleteHandler={deleteAContact}
        allcontacts={contacts}
      />
        } */}
        {FetchningContactLoading ? (
               <div  className='mt-5 container d-flex justify-content-center text-center text-muted h4'>
               <span className='text-center'>Loading data ...</span>  
               </div>
              ) : error ? (
                <div className="text-center ml-5 d-flex justify-content-center container">
                  {error}
                </div>
            ) : (
                
                        
                            <Task
                              
                              deleteHandler={deleteAContact}
                              allcontacts={contacts}
                            />
                         
              
              )}
 
         
        </tbody>
      </table>
    </>
  );
}

export default Tasks;

