import React from 'react';
import { useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import {login} from '../actions/actions';

function SignIn(props) {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    
    props.login(data); //send data of user object through to login action
  }

  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input 
      type="text"
      placeholder="Email"
      name="Email"
      ref={register({ required: true })}
      /> */}
      <input 
      type="text" 
      placeholder="Username" 
      name="username" 
      ref={register({ required: true })}
      />
      <input 
      type="text" 
      placeholder="Password"
      name="password" 
      ref={register({ required: true })}
       />
      <button type="submit">Submit</button>
    </form>
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