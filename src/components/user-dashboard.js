import React from "react";
import BoardList from "./board/boards-list";
import BoardListForm from "./board/board-form";


function UserDashboard (props) {
    return (
        <>
        <BoardList/>
        <BoardListForm/>
        </>
    )
}


export default UserDashboard