import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { fetchContactByID,updateContactByID } from "../../actions/taskActions";
function Edit({history}) {
  const dispatch = useDispatch();
  const singleContactDetails = useSelector((state) => state.task);
  const {
    DataDetailsById:DataDetailsById,
    successDataStatus: successDataStatus,
    FetchingContactByIDLoading: FetchingContactByIDLoading,
    UpdatingContactByIDLoading:UpdatingContactByIDLoading,
   
  } = singleContactDetails;
  const uid = useSelector(state =>state.firebase.auth.uid)
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("prevent deafult");
    dispatch(
      updateContactByID(
        id,
        name,
        phonenumber,
        email

      )
    );
  };
 

  useEffect(() => {
    dispatch(fetchContactByID(id));
    if (!uid) {
        history.push('/signin')
    }
    console.log('em  em')
    if (successDataStatus == true) {
      console.log('nko this')
       {
          setName(DataDetailsById.name);
          setEmail(DataDetailsById.email);
          setPhonenumber(DataDetailsById.phonenumber);       
      }
      
    }
}, [successDataStatus,history,dispatch,id,])
  
    return (
      <>
        <form
        onSubmit={submitHandler}
          className="container"
          autoComplete="on"
          style={{ marginTop: "30px" }}
          // onSubmit={this.handleSubmit}
        >
          <legend>
            {" "}
            <h4  className='text-center '>Edit Contact</h4> 
                
                
          </legend>
          <div className="form-group">
            <label htmlFor="task">Your Full name</label>
            <input
            required
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="task">Your Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            
            />
          </div>

          <div className="form-group">
            <label htmlFor="task">Your Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          <button
           disabled={UpdatingContactByIDLoading&& "disable"}
           type="submit" className="btn btn-primary">
          {!UpdatingContactByIDLoading?'Update Contact':'Updating'
          }
          </button>
        </form>
      
        </>
  )
}

export default Edit