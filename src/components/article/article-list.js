import React from "react"
import Article from "./article";
import ArticleForm from "./article-form";
import {connect} from 'react-redux';
import {getAllArticles} from '../../actions/actions';
import {deleteArticle} from '../../actions/actions';
import {getBoardArticles} from '../../actions/actions';
import history from '../../utils/history';

function ArticleList(props) {

    const handleDelete = (article) => {
        props.deleteArticle(article.id)
        props.getBoardArticles(article.boardId)
       // console.log(article)
    }

    return (
        <>

        <ArticleForm/>
        
        <section className="article-list">
            <h1>Articles</h1>
    
            {console.log("articles: ", props)}
            {props.articles.map(article => (
                <>
                <h2>{article.articleName}</h2>

                <button>Edit</button>
                <button value={article.id} onClick={() => {handleDelete(article)}}>Delete</button>
                </>
            ))}
        </section>

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
      articles: state.articles
    }
  }
  
  export default connect(mapStateToProps, {getAllArticles, deleteArticle, getBoardArticles})(ArticleList)