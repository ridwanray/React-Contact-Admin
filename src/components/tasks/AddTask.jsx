import React, { Component } from "react";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";

class AddTask extends Component {
  state = {
    name: "",
    phonenumber: "",
    email:''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    document.getElementById("addTaskForm").reset();

  };

  render() {
    const { AddingContactLoading } = this.props;
    return (
      <>
       <legend>
            {" "}
            <h4  className='text-center mt-4'>New Contact Info</h4>
          </legend>
        <form
          id="addTaskForm"
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
         
        >
          <legend> </legend>
          <div className="form-group">
            <label htmlFor="task">Your Full name</label>
            <input
            required
              type="text"
              className="form-control"
              id="name"
              onChange={this.handleChange}
              placeholder='Ridwan Alaba Yusuf'
            />
          </div>

          <div className="form-group">
            <label htmlFor="task">Your Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phonenumber"
              onChange={this.handleChange}
              placeholder='009'
            />
          </div>

          <div className="form-group">
            <label htmlFor="task">Your Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              placeholder='08157787640'
            />
          </div>
          <button
           disabled={AddingContactLoading && "disable"}
           type="submit" className="btn btn-primary">
          {!AddingContactLoading?(
                    'Add Contact'
                    ):( 'Adding...'  ) } 
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  const AddingContactLoading = state.task.AddingContactLoading;
  return {
    AddingContactLoading: AddingContactLoading,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
