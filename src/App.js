import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import Dashboard from "./components/dashboard/Dashboard";

import NavBar from "./components/layout/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./components/auth/ResetPassword";
import Edit from "./components/tasks/Edit";

///listings/:id/edit"
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/contact/:id/edit" component={Edit} />
          <Route path="/" component={Dashboard} />
      
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
