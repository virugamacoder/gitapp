import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

//components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import PageNotFound from "./pages/PageNotFound"
import Signup from "./pages/Signup"
import Footer from "./layout/Footer";
import Headers from "./layout/Headers";
import { UserContext } from "./context/UserContext";

// init for firebase
import firebaseConfig from "./config/firebaseConfig";
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
      <Headers />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
