import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import Article from "./article";
import ArticleForm from "./article-form";
import {connect} from 'react-redux';
import {getAllArticles} from '../../actions/actions';
import {deleteArticle} from '../../actions/actions';
import {getBoardArticles} from '../../actions/actions';
import {editArticle} from '../../actions/actions';
import history from '../../utils/history';

function ArticleList(props) {

    const { register, handleSubmit, errors } = useForm();
    const [editing, setEditing] = useState(false);
    const [articleToEdit, setArticleToEdit] = useState({
        articleName: '',
        linkToArticle: '',
        categories: '',
        datePublished: ''
    })


    // useEffect(() => {
    //     props.getBoardArticles(props.selectedBoard)
    // }, [props.selectedBoard])

    const handleDelete = (article) => {
        props.deleteArticle(article.id)
        //props.getBoardArticles(article.boardId) 
    }

    const editArticle = article => {
        setEditing(true);
        setArticleToEdit(article);
    }

    const saveEdit = event => {
        console.log("article to edit in save edit: ", articleToEdit);
        props.editArticle(articleToEdit.id, articleToEdit);
    }

    return (
        <>

        <ArticleForm/>
        
        <section className="article-list">
            <h1>Articles</h1>
    
            {console.log("articles: ", props.articles)}
            {props.articles.map(article => (
                <>
                <h2>{article.articleName}</h2>

                <button onClick={() => editArticle(article)}>Edit</button>
                <button value={article.id} onClick={() => {handleDelete(article)}}>Delete</button>
                </>
            ))}
        </section>
            
        <div>
        {editing && (
            <form onSubmit={handleSubmit(saveEdit)}>
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
                        type="text" 
                        placeholder="Link" 
                        name="linkToArticle" 
                        value={articleToEdit.linkToArticle}
                        onChange={event => setArticleToEdit({...articleToEdit, linkToArticle: event.target.value })}
                        ref={register({ required: "Link Required!", minLength: {value: 1, message: "Article Link is required"} })} />
                        <br />
                    <label>Categories: </label>
                    <input 
                        type="text" 
                        placeholder="Categories" 
                        name="categories"
                        value={articleToEdit.categories}
                        onChange={event => setArticleToEdit({...articleToEdit, categories: event.target.value })}
                        ref={register({ required: "Category Required!", minLength: {value: 1, message: "Article Category is required"} })} />
                        <br />
                    <label>Date Published: </label>
                    <input 
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

        {/* if on user dashboard, show articleForm
        {history.location.pathname === "/UserDashboard" //need to set this up differently, this will actually be "previous" pathname
            ? <>
                <ArticleForm/>
                </>
            : ""
        }  */}


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
  
  export default connect(mapStateToProps, {getAllArticles, deleteArticle, getBoardArticles, editArticle})(ArticleList)