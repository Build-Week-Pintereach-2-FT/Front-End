import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {getUserBoards} from '../../actions/actions';
import {getAllBoards} from '../../actions/actions';
import {getAllArticles} from '../../actions/actions';
import {getBoardArticles} from '../../actions/actions';
import {deleteBoard} from '../../actions/actions';

import history from '../../utils/history';

function BoardList (props) {

    useEffect(() => {
        getBoards()
    }, [])

    const getBoards = () => {
        console.log(props.user.id)
       
        console.log("HISTORY: ", history)

    //     //if user is logged in (user.id is not null), 
    //     //AND user is on their dashboard (therefore, showing only their boards)
    //    if ( history.location.pathname === "/UserDashboard") {
    //          //props.getUserBoards(props.user.id);
    //          props.getUserBoards();
    //    }
    //    else {
    //         props.getAllBoards();
    //    }

        props.getAllBoards();
 
    }

    const handleArticles = (event) => {
        //props.getAllArticles();
        props.getBoardArticles(event.target.value)
        console.log("event:", event.target.value)
        
        history.push('/ArticleList')
    }

    const handleDelete = (event) => {
        props.deleteBoard(event.target.value)

        //console.log("EVENT HANDLE DELETE: ", event.target.value)

    }

    return (
        <div>
            <div>
            {console.log("Articles after getAllArticles: ", props.articles)}

            {props.boards.map(boardEl => (
                <div key={boardEl.id}>
                    {/* <Link to={`/BoardList/${boardEl.id}`}>
                        <p>MapName {boardEl.name}</p>
                    </Link> */}
                    <h2>{boardEl.boardName}</h2>
                    <button value={boardEl.id} onClick={handleArticles}>See articles</button>

                    {/* if on user dashboard, show edit/delete buttons */}
                    {history.location.pathname === "/UserDashboard"
                        ? <>
                            <button>Edit</button>
                            <button value={boardEl.id} onClick={handleDelete}>Delete</button>
                          </>
                        : ""
                    }

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
      boards: state.boards,
      articles: state.articles
    }
  }
  
  export default connect(mapStateToProps, {getAllBoards, getUserBoards, getAllArticles, getBoardArticles, deleteBoard})(BoardList)