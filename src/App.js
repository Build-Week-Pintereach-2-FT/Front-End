import React from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in"
import HomePage from "./components/home-page";
import ArticleForm from "./components/article/article-form";
import ArticleList from "./components/article/article-list"

function App() {
  return (
    <div className="App">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/SignUp'>SignUp</Link>
        <Link to='/SignIn'>SignIn</Link>
      </div>
      
      <Route exact path='/'>
        <HomePage/>
      </Route>

      <Route  path='/SignUp'>
        <SignUp/>
      </Route>
      
      <Route path='/signin'>
        <SignIn />
      </Route>

    </div>
  );
}

export default App;
