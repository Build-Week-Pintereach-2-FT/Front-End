import React from "react";
import { Link } from "react-router-dom";
import BoardForm from "./board-form";

export default function BoardList (props) {

    return (
        <div>
            <BoardForm/>
            {/* {props.boards.map(boardEl => {
                <div key={boardEl.id}>
                    <Link to={`/BoardList/${boardEl.id}`}>
                        <p>{boardEl.name}</p>
                    </Link>
                </div>
            })} */}
        </div>
    )

}