import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import Article from "./article";
import ArticleForm from "./article-form";
import {connect} from 'react-redux';
import {deleteArticle} from '../../actions/actions';
import {editArticle} from '../../actions/actions';


function ArticleList(props) {

    const { register, handleSubmit, errors } = useForm();
    const [editing, setEditing] = useState(false);
    const [articleToEdit, setArticleToEdit] = useState({
        articleName: '',
        linkToArticle: '',
        categories: '',
        datePublished: ''
    })


    const handleDelete = (article) => {
        props.deleteArticle(article.id) 
    }

    const editArticle = article => {
        setEditing(true);
        setArticleToEdit(article);
    }

    const saveEdit = event => {
        props.editArticle(articleToEdit.id, articleToEdit);
    }

    return (
        <>

        <ArticleForm/>

        <h1 className="PageTitle">Articles</h1>
        
        <section className="CardContainer">
    
            {props.articles.map(article => (
                <div className="Card">
                    <h2 className="CardHeading">{article.articleName}</h2>
                    <p className="CardDescription">{article.linkToArticle}</p>

                    <button className="CardButton" onClick={() => editArticle(article)}>Edit</button>
                    <button className="CardButton" value={article.id} onClick={() => {handleDelete(article)}}>Delete</button>
                </div>
            ))}
        </section>
            
        <div>
        {editing && (
            <form className="form-holder" onSubmit={handleSubmit(saveEdit)}>
                    <label>Article Name: </label>
                    <input 
                        type="text" 
                        placeholder="Article" 
                        name="articleName" 
                        value={articleToEdit.articleName}
                        onChange={event => setArticleToEdit({...articleToEdit, articleName: event.target.value })}
                        ref={register({ required: "Name Required!", minLength: {value: 2, message: "Article name too short"} })} />
                        <br />
                    <label>Article Link: </label>
                    <input 
                        className='form-input'
                        type="text" 
                        placeholder="Link" 
                        name="linkToArticle" 
                        value={articleToEdit.linkToArticle}
                        onChange={event => setArticleToEdit({...articleToEdit, linkToArticle: event.target.value })}
                        ref={register({ required: "Link Required!", minLength: {value: 1, message: "Article Link is required"} })} />
                        <br />
                    <label>Categories: </label>
                    <input 
                        className='form-input'
                        type="text" 
                        placeholder="Categories" 
                        name="categories"
                        value={articleToEdit.categories}
                        onChange={event => setArticleToEdit({...articleToEdit, categories: event.target.value })}
                        ref={register({ required: "Category Required!", minLength: {value: 1, message: "Article Category is required"} })} />
                        <br />
                    <label>Date Published: </label>
                    <input 
                        className='form-input'
                        type="date" 
                        placeholder="Date" 
                        name="datePublished" 
                        value={articleToEdit.datePublished}
                        onChange={event => setArticleToEdit({...articleToEdit, datePublished: event.target.value })}
                        ref={register} />
                        <br />

                    {errors.articleName && <p>{errors.articleName.message}</p>}
                    {errors.linkToArticle && <p>{errors.linkToArticle.message}</p>}
                    {errors.categories && <p>{errors.categories.message}</p>}
                    

                <button type="submit">Save</button>
                <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        )}
        </div>

        </>
    )
}


const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      error: state.error,
      articles: state.articles,
      selectedBoard: state.selectedBoard
    }
  }
  
  export default connect(mapStateToProps, {deleteArticle, editArticle})(ArticleList)