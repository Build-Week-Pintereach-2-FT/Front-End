import React from 'react';
import { useForm } from 'react-hook-form';
import {createNewArticle} from "../actions/actions"

function ArticleForm (props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
      console.log(data);

      props.createNewArticle(data);

      e.target.reset();
  }

  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Article Name: </label>
      <input 
            type="text" 
            placeholder="Article" 
            name="Article Name" 
            ref={register} />
            <br />
            <label>Article Link: </label>
      <input 
            type="text" 
            placeholder="Link" 
            name="Link to Article" 
            ref={register} />
            <br />
            <label>Categories: </label>
      <input 
            type="text" 
            placeholder="Categories" 
            name="Categories" 
            ref={register} />
            <br />
            <label>Date Published: </label>
      <input 
            type="date" 
            placeholder="Date" 
            name="Date Published" 
            ref={register} />
            <br />
      <button type="submit">Submit</button>
    </form>
  );
}

const mapStateToProps = state => {
      return {
        isLoading: state.isLoading,
        error: state.error
      }
    }
    
export default connect(mapStateToProps, {createNewArticle})(ArticleForm)