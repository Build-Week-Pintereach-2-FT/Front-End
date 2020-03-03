import React from "react";
import { useForm } from "react-hook-form";

export default function BoardForm () {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (boardData, e) => {
        console.log(boardData);
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