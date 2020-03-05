import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {createNewBoard} from "../../actions/actions"
import {connect} from 'react-redux';

function BoardForm (props) {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (boardData, e) => {
        console.log("boardData", boardData);

        //set up newBoard state to match that on backend by adding a userId
        const newBoard = {
            ...boardData,
            userId: props.user.id
            //userId: 3 //hardcoded, change later once we can properly store user state
        }
        console.log("newBoard: ", newBoard)
        props.createNewBoard(newBoard);

        e.target.reset();
    }

    return ( 
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                className='form-input'
                type='text' 
                placeholder='Enter Board Title' 
                name='boardName' 
                ref={register({ required: "Title Required!", minLength: {value: 3, message: "Title too short"} })}/>

                <textarea
                 className='form-input' 
                 placeholder='Enter Board Description' 
                 name='boardDescription' 
                 ref={register({ required: "Description Required!", minLength: {value: 2, message: "Description too short"} })}/>

                {errors.boardName && <p>{errors.boardName.message}</p>}
                {errors.boardDescription && <p>{errors.boardDescription.message}</p>}

                <button type='submit'>Create New Board</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      error: state.error,
      user: state.user
    }
  }
  
  export default connect(mapStateToProps, {createNewBoard})(BoardForm)