import React from "react";
import { useForm } from "react-hook-form";
import {createNewBoard} from "../../actions/actions"
import {connect} from 'react-redux';

function BoardForm (props) {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (boardData, e) => {

        //set up newBoard state to match that on backend by adding a userId
        const newBoard = {
            ...boardData,
            userId: props.user.id
        }

        props.createNewBoard(newBoard);

        e.target.reset();
    }

    return ( 


        <div className='form-holder'>
            <div className='form-wrapper'>
            <p>Create a new board</p> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                className='form-input'
                type='text' 
                placeholder='Enter Board Title' 
                name='boardName' 
                ref={register({ required: "Title Required!", minLength: {value: 3, message: "Title too short"} })}/>

                <input
                 className='form-input' 
                 type='text'
                 placeholder='Enter Board Description' 
                 name='boardDescription' 
                 ref={register({ required: "Description Required!", minLength: {value: 2, message: "Description too short"} })}/>

                {errors.boardName && <p>{errors.boardName.message}</p>}
                {errors.boardDescription && <p>{errors.boardDescription.message}</p>}

                <button className='form-button' type='submit'>Create New Board</button>
            </form>
            </div>
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