import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {getUserBoards} from '../../actions/actions';
import {getAllBoards} from '../../actions/actions';
import {getAllArticles} from '../../actions/actions';
import {getBoardArticles} from '../../actions/actions';
import history from '../../utils/history';

// function NonUserBoardList (props) {

//     useEffect(() => {
//         getBoards()
//     }, [])

//     const getBoards = () => {
        
//     }


//     return (
//         <div>
//             <div>
//             {console.log("Articles after getAllArticles: ", props.articles)}

//             {boards.map(boardEl => (
//                 <div key={boardEl.id}>
//                     {/* <Link to={`/BoardList/${boardEl.id}`}>
//                         <p>MapName {boardEl.name}</p>
//                     </Link> */}
//                     <h2>{boardEl.boardName}</h2>

//                 </div>
//             ))}
//             </div>
//         </div>
//     )

// }

// export default NonUserBoardList;