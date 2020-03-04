import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';

import NavBar from "./components/navbar";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";
import BoardList from "./components/board/boards-list";
import Board from "./components/board/board";
import ArticleList from "./components/article/article-list";
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './components/user-dashboard';
import NonUserBoardList from './components/board/nonUser-board-list';

function App() {
  return (
    <div className="App">

      <NavBar/>
      
      <Switch>

      <PrivateRoute exact path="/UserDashboard" component={UserDashboard}/>

      <Route exact path='/'>
          <h1>Homepage stuff</h1>
      </Route>

      <Route  path='/SignUp'>
          <SignUp/>
      </Route>

      <Route  path='/SignIn'>
          <SignIn/>
      </Route>

      {/* //react 1  */}
      {/* <Route  path='/BoardList'>
          <NonUserBoardList/>
      </Route> */}

      <Route  path='/BoardList/:BoardID'>
          {/* <Board boards={boardsProps}/> */}
          <Board/>
      </Route> 

      <Route exact path='/ArticleList' component={ArticleList}/>

      
   
      </Switch>

    </div>
  );
}

export default App;
