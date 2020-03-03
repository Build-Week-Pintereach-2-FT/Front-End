import React from "react";
import { useParams } from "react-router-dom";

export default function Board (props) {
    
    // const {boardID} = useParams();

    // const board = props.boards.find( boardEl => boardEl.id === Number(boardID))

    return (
        <div>
            {/* <div>
            <p>{board.name}</p>
            <p>{board.whateverDataIs}</p>
            </div> */}

            <p>Individual Board</p>
        </div>
    )
}
