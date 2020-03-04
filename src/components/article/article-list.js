import React from "react"
import Article from "./article";
import ArticleForm from "./article-form";
import {connect} from 'react-redux';

function ArticleList(props) {
    return (
        <>
        <ArticleForm/>
        <section className="article-list">
            <h1>Articles</h1>
    {//data goes here}
}
            {props.articles.map(article => {

            })}
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
  
  export default connect(mapStateToProps, {})(ArticleList)