import React from "react";
import { useParams } from "react-router-dom";

export default function Board (props) {
    console.log("BoardProps ", props.boards);
    const {BoardID} = useParams();
    console.log("Boards ID ", BoardID);
    const boardBit = props.boards.find( boardEl => boardEl.id === Number(BoardID))
    console.log("boardBits ", boardBit)
    return (
        <div>
            <div>
            <p>{boardBit.name}</p>
            <p>{boardBit.description}</p>
            </div>

            <p>Individual Board</p>
        </div>
    )
}
