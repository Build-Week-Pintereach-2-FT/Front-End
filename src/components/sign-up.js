import React from "react";
import { useForm } from 'react-hook-form'

export default function SignUp () {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        
    }

    return (
        <div className='form-holder'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                className='form-input'
                type='text' 
                placeholder='username' 
                name='username' 
                ref={register({ required: "Username Required!", minLength: {value: 3, message: "Username too short"} })}/>

                <input
                 className='form-input'
                 type='text' 
                 placeholder='email' 
                 name='email' 
                 ref={register({ required: "Email Required!", minLength: {value: 5, message: "Email invalid"} })}/>

                <input 
                 className='form-input'
                 type='password'
                 placeholder='password'
                 name='password' 
                 ref={register({ required: "Password Required!", minLength: {value: 3, message: "Password too short"} })}/>

                {errors.username && <p>{errors.username.message}</p>}
                {errors.email && <p>{errors.email.message}</p>}
                {errors.password && <p>{errors.password.message}</p>}

                <input type='submit'/>
            </form>

        </div>
    );

}