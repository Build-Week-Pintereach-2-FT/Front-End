import React from "react";
import { Route, Link } from "react-router-dom";
import SignUp from "./sign-up";

export default function HomePage() {

    return (
        <div>
            <div>
                <Link className='home-nav' to='/'>Home</Link>
                <Link className='home-nav' to='/SignUp'>SignUp</Link>
            </div>
      
            <Route exact path='/'>
                <h1>Homepage stuff</h1>
            </Route>

            <Route  path='/SignUp'>
                <SignUp/>
            </Route>       
        </div>
    )

}