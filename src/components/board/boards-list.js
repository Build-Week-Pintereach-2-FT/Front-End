import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import BoardForm from "./board-form";
import {connect} from 'react-redux';
import {getUserBoards} from '../../actions/actions';

function BoardList (props) {

    useEffect(() => {
        //getBoards(props.user.id);
        getBoards()
    }, [])

    const getBoards = () => {
        console.log(props.user.id)
        props.getUserBoards(props.user.id);
    }

    return (
        <div>
            <BoardForm/>
            <div>
            {props.boards.map(boardEl => (
                <div key={boardEl.id}>
                    {/* <Link to={`/BoardList/${boardEl.id}`}>
                        <p>MapName {boardEl.name}</p>
                    </Link> */}
                    <h2>{boardEl.boardName}</h2>
                </div>
            ))}
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      error: state.error,
      user: state.user,
      boards: state.boards
    }
  }
  
  export default connect(mapStateToProps, {getUserBoards})(BoardList)