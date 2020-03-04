import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import SignUp from "./sign-up";
import SignIn from "./sign-in";
import BoardList from "./board/boards-list";
import Board from "./board/board";
import ArticleList from "./article/article-list";

// const dummydata = [{
//     name: 'Biology Research',
//     id: 0,
//     description: 'Super cool stuff you wouldnt understand'
// },{
//     name: 'Game Strategies',
//     id: 1,
//     description: 'How to lose more effectively in order to save time'
// },{
//     name: 'A wider variety of trees',
//     id: 2,
//     description: 'These trees are very poplar!'
// }];

export default function HomePage() {

    //const [boardsProps] = useState(dummydata);

    return (
        <div>
            <div>
                <Link className='home-nav' to='/'>Home</Link>
                <Link className='home-nav' to='/SignUp'>SignUp</Link>
                <Link className='home-nav' to='/SignIn'>SignIn</Link>
                <Link className='home-nav' to='/BoardList'>Board List</Link>
                <Link className='home-nav' to='/ArticleList'>Article List</Link>
                <Link className='home-nav' to='/UserDashboard'>User Dashboards</Link>
            </div>
      
            
        </div>
    )

}