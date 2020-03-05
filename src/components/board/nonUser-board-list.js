import React, { useEffect, useState } from "react";
import axios from "axios";

import Board from "./board";
// import { Link } from "react-router-dom";
// import {connect} from 'react-redux';
// import {getUserBoards} from '../../actions/actions';
// import {getAllBoards} from '../../actions/actions';
// import {getAllArticles} from '../../actions/actions';
// import {getBoardArticles} from '../../actions/actions';
// import history from '../../utils/history';

// Get request here!!!!!!!!!!!

function NonUserBoardList (props) {

    const [boardsI, setBoardsI] = useState([]);

    useEffect(() => {
        axios.get('https://pintereach2bw4.herokuapp.com/api/boards').then(response => {
            console.log("This is the React I get request ", response);
            setBoardsI(response.data);
        }).catch(error => {
            console.log("Shit has hit the React I fan ", error);
        })
    }, [])

    return (
        <div>
            {boardsI.map(boardsEl => {
                return (
                    <Board 
                    key = {boardsEl.id}
                    boardName = {boardsEl.boardName}
                    boardDescription = {boardsEl.boardName}/> 
                );
            })}
               
        </div>
    )

}

export default NonUserBoardList;