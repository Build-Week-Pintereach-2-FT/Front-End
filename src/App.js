import React from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';

import NavBar from "./components/navbar";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";
import BoardList from "./components/board/boards-list";
import Board from "./components/board/board";
import ArticleList from "./components/article/article-list";
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './components/user-dashboard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Route exact path='/'>
          <h1>Homepage stuff</h1>
      </Route>

      <Route  path='/SignUp'>
          <SignUp/>
      </Route>

      <Route  path='/SignIn'>
          <SignIn/>
      </Route>

      <Route  path='/BoardList'>
          {/* <BoardList boards={boardsProps}/> */}
          <BoardList/>
      </Route>

      <Route  path='/BoardList/:BoardID'>
          {/* <Board boards={boardsProps}/> */}
          <Board/>
      </Route> 

      <Route exact path='/ArticleList' component={ArticleList}/>

      <PrivateRoute exact path="/UserDashboard" component={UserDashboard}/>
   
    

    </div>
  );
}

export default App;
