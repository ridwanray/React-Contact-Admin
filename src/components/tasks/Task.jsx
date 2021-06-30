import React, { useState, useEffect } from "react";
import { removeTask } from "../../actions/taskActions";
import { Link } from 'react-router-dom';



function Task(props) {
 

  return (
    <>
      {props.allcontacts.map(contact => (
        <tr >
          <th scope="row">
            <div className="media align-items-center">
              <div className="media-body ml-4">
                <a href="" className="name h6 mb-0 text-sm">
                  {contact.task.name}
                </a>
                <small className="d-block font-weight-bold">#{contact.task.email}/night</small>
              </div>
            </div>
          </th>
          <td>
            <div className="dropdown">
              <span className="text-center badge badge-secondary rounded-pill ml-4">
                {contact.task.name}
              </span>
            </div>
          </td>
          <td>
            <div className="dropdown">
              <span className="text-center badge badge-secondary rounded-pill ml-4">
                {`${contact .currently_booked}`}
              </span>
              <div className="dropdown-menu">

              </div>
            </div>
          </td>
          <td className="text-right">
            <div className="ml-3">
             
    
                <Link to={`/spaces/p/${contact .id}`}
                
                  className="action-item mr-2"
                >
                <i
                  className="fa fa-eye">

                  </i>
                
                </Link>
             
             
              
              <Link to={`/listings/${contact .id}/edit`}

                className="action-item mr-2"

              >
                <i

                  className="fa fa-edit"></i>
              </Link>
              <button
              // onClick={() => props.deleteHandler(contact .id)}
                className="action-item text-danger mr-2"
              >
                <i
                  className="fa fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};


export default Task;
