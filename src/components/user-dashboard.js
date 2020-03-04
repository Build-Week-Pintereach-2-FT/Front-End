import React from "react";
import BoardList from "./board/boards-list";
import BoardListForm from "./board/board-form";

function UserDashboard () {
    return (
        <>
        <BoardList/>
        <BoardListForm/>
        </>
    )
}

export default UserDashboard;