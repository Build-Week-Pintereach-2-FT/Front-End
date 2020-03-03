import React from "react";
import { Route, Link } from "react-router-dom";
import SignUp from "./sign-up";
import SignIn from "./sign-in";
import BoardList from "./board/boards-list";

export default function HomePage() {

    return (
        <div>
            <div>
                <Link className='home-nav' to='/'>Home</Link>
                <Link className='home-nav' to='/SignUp'>SignUp</Link>
                <Link className='home-nav' to='/SignIn'>SignIn</Link>
                <Link className='home-nav' to='/BoardList'>Board List</Link>
            </div>
      
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
                <BoardList/>
            </Route>

            <Route  path='/Board/:BoardID'>
                <Board/>
            </Route>            
        </div>
    )

}