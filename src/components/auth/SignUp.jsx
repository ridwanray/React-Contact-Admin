import React, { Component } from "react";
import { signUp } from "../../actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };

  render() {
    const { uid } = this.props;
    const { SignUploading } = this.props;
    if (uid) return <Redirect to="/" />;
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <legend>
            {" "}
            <h4  className='text-center'>Sign Up</h4>
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
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
            required
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-lg">
          {!SignUploading?(
                    'Create an account'
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
  const SignUploading = state.auth.SignUploading;
  return {
    uid: uid,
    SignUploading: SignUploading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
