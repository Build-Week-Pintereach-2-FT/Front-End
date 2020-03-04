import React from 'react';
import { useForm } from 'react-hook-form';
import {createNewArticle} from "../../actions/actions";
import {connect} from 'react-redux';

function ArticleForm (props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
      console.log(data);
      
      //set up newArticle state to match that on backend by adding a boardId
      const newArticle = {
        ...data,
        //boardId: create state to see what board we currently clicked into??
        boardId: 2
      }

      console.log("newArticle: ", newArticle)
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
            name="articleName" 
            ref={register} />
            <br />
            <label>Article Link: </label>
      <input 
            type="text" 
            placeholder="Link" 
            name="linkToArticle" 
            ref={register} />
            <br />
            <label>Categories: </label>
      <input 
            type="text" 
            placeholder="Categories" 
            name="categories" 
            ref={register} />
            <br />
            <label>Date Published: </label>
      <input 
            type="date" 
            placeholder="Date" 
            name="datePublished" 
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