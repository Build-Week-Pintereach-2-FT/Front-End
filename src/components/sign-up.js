import React from "react";
import { useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import {createNewUser} from "../actions/actions"

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function SignUp (props) {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        console.log("SignUp data ", data);

        props.createNewUser(data); //send data to createNewUser action

        e.target.reset();
    }

    return (
        <div className='form-holder'>
            <div className='form-wrapper'>
            <p>Create a new account</p>    
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
                    <Label for='email'/>  
                    <input
                    className='form-input'
                    type='text' 
                    placeholder='email' 
                    name='email' 
                    ref={register({ required: "Email Required!", minLength: {value: 5, message: "Email invalid"} })}/>
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
                {errors.email && <p>{errors.email.message}</p>}
                {errors.password && <p>{errors.password.message}</p>}

                <Button type='submit'>Submit</Button>
            </Form>
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
  
  export default connect(mapStateToProps, {createNewUser})(SignUp)