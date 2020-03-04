import React from "react"
import Article from "./article";
import ArticleForm from "./article-form";
import {connect} from 'react-redux';
import {getAllArticles} from '../../actions/actions';


function ArticleList(props) {

    const getArticles = () => {
       // props.getAllArticles()

    }


    return (
        <>

        <ArticleForm/>
        <section className="article-list">
            <h1>Articles</h1>
    {//data goes here}
}
            {console.log("articles: ", props)}
            {props.articles.map(article => (
                <h2>test</h2>
            ))}
        </section>
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
  
  export default connect(mapStateToProps, {getAllArticles})(ArticleList)