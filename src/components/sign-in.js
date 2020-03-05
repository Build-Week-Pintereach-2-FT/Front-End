import React from 'react';
import { useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import {login} from '../actions/actions';

import { Button, Form, FormGroup, Label} from 'reactstrap';

function SignIn(props) {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    
    props.login(data); //send data of user object through to login action

    e.target.reset();
  }

  
  return (
    <div className='form-holder'>

      <div className='form-wrapper'>
        <p>Log in to an existing account</p>    
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label for='username'/>    
                <input 
                className='form-input'
                type='text' 
                placeholder='username' 
                name='username' 
                ref={register({ required: "Username Required!", minLength: {value: 3, message: "Username too short"} })}/>
            </FormGroup>

            <FormGroup>
                <Label for='password'/>  
                <input 
                className='form-input'
                type='password'
                placeholder='password'
                name='password' 
                ref={register({ required: "Password Required!", minLength: {value: 3, message: "Password too short"} })}/>
            </FormGroup>


            {errors.username && <p>{errors.username.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}

            <Button className='form-button' type='submit'>Submit</Button>
        </Form>
      </div>

      <div>
        <img className='form-image'
        src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        alt='New User pic'></img>
      </div>

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