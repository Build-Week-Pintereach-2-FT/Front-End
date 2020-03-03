import React from "react";
import { useForm } from "react-hook-form";
import {createNewBoard} from "../actions/actions"

function BoardForm (props) {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (boardData, e) => {
        console.log(boardData);

        props.createNewBoard(boardData);

        e.target.reset();
    }

    return ( 
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                className='form-input'
                type='text' 
                placeholder='Enter Board Title' 
                name='boardTitle' 
                ref={register({ required: "Title Required!", minLength: {value: 3, message: "Title too short"} })}/>

                <textarea
                 className='form-input'
                //  type='textarea' 
                 placeholder='Enter Board Description' 
                 name='boardDesc' 
                 ref={register({ required: "Description Required!", minLength: {value: 2, message: "Description too short"} })}/>

                {errors.boardTitle && <p>{errors.boardTitle.message}</p>}
                {errors.boardDesc && <p>{errors.boardDesc.message}</p>}

                <button type='submit'>Create New Board</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, {createNewBoard})(BoardForm)