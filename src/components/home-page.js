import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "../home-page.css";
import ImgBit from "../assets/background.png";

export default function HomePage() {

    let introRef = useRef(null);    

    useEffect(() => {
        gsap.from('.anim1', {opacity: 0, duration: 1, y: -50});
    },[]);

    return (
        <div className='home-background'>
            <img ref={element => {introRef = element}}className='background-image' src={ImgBit} alt='backgroundimg'></img>
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