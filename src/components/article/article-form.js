import React from 'react';
import { useForm } from 'react-hook-form';
import {createNewArticle} from "../../actions/actions";
import {connect} from 'react-redux';

function ArticleForm (props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
      
      //set up newArticle state to match that on backend by adding a boardId
      const newArticle = {
        ...data,
        boardId: props.selectedBoard
      }

      props.createNewArticle(newArticle);

      e.target.reset();
  }

  
  return (

    <div className='form-holder'>
      <div className='form-wrapper'>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Article Name: </label>
        <input className='form-input'
              type="text" 
              placeholder="Article" 
              name="articleName" 
              ref={register} />
              <br />
              <label>Article Link: </label>
        <input className='form-input'
              type="text" 
              placeholder="Link" 
              name="linkToArticle" 
              ref={register} />
              <br />
              <label>Categories: </label>
        <input className='form-input'
              type="text" 
              placeholder="Categories" 
              name="categories" 
              ref={register} />
              <br />
              <label>Date Published: </label>
        <input className='form-input'
              type="date" 
              placeholder="Date" 
              name="datePublished" 
              ref={register} />
              <br />
        <button className='form-button' type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
      return {
        isLoading: state.isLoading,
        error: state.error,
        selectedBoard: state.selectedBoard
      }
    }
    
export default connect(mapStateToProps, {createNewArticle})(ArticleForm)