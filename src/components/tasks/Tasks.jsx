// import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../actions/taskActions";

function Tasks() {
  const dispatch = useDispatch();
  const contactInfo = useSelector((state) => state.task);
  const { FetchningContactLoading,contacts,error } = contactInfo;

  useEffect(() => {
    // fetchContact();
    dispatch(fetchContact());
    console.log('coming from task effect')
  }, [dispatch])
  
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
          </tr>
        </thead>
        <tbody>

        {FetchningContactLoading ? (
               <div  className='mt-5 container d-flex justify-content-center text-center text-muted h4'>
               <span className='text-center'>Loading data ...</span>  
               </div>
              ) : error ? (
                <div className="text-center ml-5 d-flex justify-content-center container">
                  {error}
                </div>
            ) : (
                
                          <tbody>
                            <Task
                              // deleteHandler={deleteASpace}
                              allcontacts={contacts}
                            />
                          </tbody>
              
              )}
 
         
        </tbody>
      </table>
    </>
  );
}

export default Tasks;

