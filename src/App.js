import React from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import SignUp from "./components/sign-up";
import HomePage from "./components/home-page";

function App() {
  return (
    <div className="App">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/SignUp'>SignUp</Link>
      </div>
      
      <Route exact path='/'>
        <HomePage/>
      </Route>

      <Route  path='/SignUp'>
        <SignUp/>
      </Route>

    </div>
  );
}

export default App;
