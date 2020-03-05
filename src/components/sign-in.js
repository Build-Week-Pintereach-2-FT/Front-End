import React from 'react';
import { useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import {login} from '../actions/actions';

function SignIn(props) {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    
    props.login(data); //send data of user object through to login action

    e.target.reset();
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
             type='password'
             placeholder='password'
             name='password' 
             ref={register({ required: "Password Required!", minLength: {value: 3, message: "Password too short"} })}/>

            {errors.username && <p>{errors.username.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}

            <input type='submit'/>
        </form>

    </div>
);
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    user: state.user,
    error: state.error
  }
}

export default connect(mapStateToProps, {login})(SignIn)