import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { useForm } from "react-hook-form";
import {getUserBoards} from '../../actions/actions';
import {getAllBoards} from '../../actions/actions';
import {getAllArticles} from '../../actions/actions';
import {getBoardArticles} from '../../actions/actions';
import {deleteBoard} from '../../actions/actions';
import {editBoard} from '../../actions/actions';
import {setSelectedBoard} from '../../actions/actions';

import history from '../../utils/history';

function BoardList (props) {


    const { register, handleSubmit, errors } = useForm();
    const [editing, setEditing] = useState(false);
    const [boardToEdit, setBoardToEdit] = useState({
        boardName: '',
        boardDescription: ''
    })

    useEffect(() => {
        getBoards()
    }, [])

    const getBoards = () => {
        //console.log(props.user.id)

        props.getAllBoards();
       //props.getUserBoards(props.user.id)  <====== ask Tim tomorrow! The new endpoint succeeds, but never returns data? 
    }

    const handleArticles = (event) => {
        props.getBoardArticles(event.target.value)
        props.setSelectedBoard(event.target.value) //set selected board to global state, to handle easily in article form
        history.push('/ArticleList')
    }

    const handleDelete = (event) => {
        props.deleteBoard(event.target.value)
    }

    const editBoard = board => {
        setEditing(true);
        setBoardToEdit(board);
    }

    const saveEdit = event => {
        console.log("board to edit in save edit: ", boardToEdit);
        props.editBoard(boardToEdit.id, boardToEdit);
    }

    return (
        <div>
            <div>
            {console.log("Boards on render of board-list", props.boards)}

            {props.boards.map(boardEl => (
                <div key={boardEl.id}>
                  
                    <h2>{boardEl.boardName}</h2>
                    <button value={boardEl.id} onClick={handleArticles}>See articles</button>

                    <button onClick={() => editBoard(boardEl)}>Edit</button>
                    <button value={boardEl.id} onClick={handleDelete}>Delete</button>
                    
                </div>
            ))}
            </div>
            {editing && (
                <form onSubmit={handleSubmit(saveEdit)}>
                   <input 
                   className='form-input'
                   type='text' 
                   name='boardName' 
                   value={boardToEdit.boardName} 
                   onChange={event => setBoardToEdit({...boardToEdit, boardName: event.target.value })}
                   ref={register({ required: "Title Required!", minLength: {value: 3, message: "Title too short"} })}/>
   
                   <textarea
                    className='form-input' 
                    name='boardDescription' 
                    value={boardToEdit.boardDescription} 
                    onChange={event => setBoardToEdit({...boardToEdit, boardDescription: event.target.value })}
                    ref={register({ required: "Description Required!", minLength: {value: 2, message: "Description too short"} })}/>
   
                   {errors.boardName && <p>{errors.boardName.message}</p>}
                   {errors.boardDescription && <p>{errors.boardDescription.message}</p>}

                   <button type='submit'>Save</button>
                   <button onClick={() => setEditing(false)}>Cancel</button>
               </form>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      error: state.error,
      user: state.user,
      boards: state.boards,
      articles: state.articles,
    }
  }
  
  export default connect(mapStateToProps, {getAllBoards, getUserBoards, getAllArticles, getBoardArticles, deleteBoard, editBoard, setSelectedBoard})(BoardList)