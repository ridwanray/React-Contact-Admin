import React, { useState, useEffect } from "react";
import { removeTask } from "../../actions/taskActions";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";



function Task(props) {
  const [passedContact, setPassedContact] = useState(props.allcontacts);
  const addedcontact = useSelector((state) => state.task);
  const { newaddedcontact,ContactAddedSuccesssStatus } = addedcontact;

  const deletedcontact = useSelector((state) => state.task);

  const { deletedContactId, ContactDeletedSuccesssStatus } = deletedcontact;


  useEffect(() => {
    {
      ContactAddedSuccesssStatus &&
      setPassedContact([ newaddedcontact,...passedContact]);
      console.log("new contact added");
    }
    {
      ContactDeletedSuccesssStatus &&
      // setPassedContact([ newaddedcontact,...passedContact]);
      console.log("a contact deleted");
      console.log(passedContact)
     
      const latestContact = passedContact.filter(contact => contact.id != deletedContactId);
      console.log(latestContact );
      setPassedContact(latestContact);
    }
  }, [ContactAddedSuccesssStatus,ContactDeletedSuccesssStatus]);
  return (
  //   <Link to={`/listings/${space.id}/edit`}

  //   className="action-item mr-2"

  // >
  //   <i

  //     className="fa fa-edit"></i>
  // </Link>
    <>
    {passedContact.map(contact => (
      <tr key={contact.id}>
        <td scope="col">{contact.name}</td>
        <td scope="col">{contact.phonenumber}</td>
        <td scope="col">{contact.email}</td>
       
        <td scope="col">
         
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => props.deleteHandler(contact.id)}
          >
            delete
          </span>
        
        </td>
        <td scope="col">
           <Link to={`/contact/${contact.id}/edit`}>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            // onClick={() => handleRemove(task)}
          >
            edit
          </span>
          </Link>
        </td>
      </tr>
    ))}
    </>


  );
};


export default Task;
