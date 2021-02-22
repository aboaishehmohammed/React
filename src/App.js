import './App.css';
import React from 'react';
import Home from './components/pages/home-page/home'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Services from "./components/pages/services/services";
import Products from "./components/pages/products/products";
import SignUp from "./components/pages/signUp/signup";
function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact
                component={Home}
                />
                <Route path='/services'
                       component={Services}
                />
                <Route path='/products'
                       component={Products}
                />
                <Route path='/sign-up'
                       component={SignUp}
                />

            </Switch>
        </Router>

    </>
  );
}

export default App;
