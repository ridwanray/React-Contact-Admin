import React, { Component } from "react";
import { resetPassword } from "../../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ResetPassword extends Component {
  state = {
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.resetPassword(this.state);
  };

  render() {
    const { uid } = this.props;
    const { ResetPasswordloading } = this.props;
     if(uid) return <Redirect to="/"/>
    return (
      <>
        <form
          className="container"
          autoComplete="on"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <legend>
            {" "}
            <h4  className='text-center'>Reset Password</h4>
          </legend>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
             required
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-block btn-lg">
          {!ResetPasswordloading?(
                    'Reset Password'
                    ):(   
                    <div
                      className="spinner-border spinner-border-sm  text-light"
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                    )}
          </button>
          
        </form>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;
  const ResetPasswordloading = state.auth.ResetPasswordloading;
  return {
    uid: uid,
    ResetPasswordloading: ResetPasswordloading,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (creds) => dispatch(resetPassword(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
