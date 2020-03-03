import React from 'react';
import { useForm } from 'react-hook-form';

export default function ArticleForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
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