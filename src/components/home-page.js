import React, { useState } from "react";
import "../home-page.css";



export default function HomePage() {

    

    return (
        <div>
            <div className='home-content'>
                <h1 className='anim1'><span>Bridging the Gap </span><span>between dream and reality</span></h1>
                <p>Some cool things about pintereach are that it is cool.</p>
            </div>
            <div>
                <img className='home-image'
                src='https://images.unsplash.com/photo-1458040937381-49c067dfd49a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                alt='Research Pic'>
                </img>
            </div>
            
        </div>
    )

}