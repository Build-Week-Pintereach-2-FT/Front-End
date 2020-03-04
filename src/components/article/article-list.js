import React from "react"
import Article from "./article";
import ArticleForm from "./article-form";
import {connect} from 'react-redux';
import {getAllArticles} from '../../actions/actions';
import history from '../../utils/history';

function ArticleList(props) {


    return (
        <>

        
        <section className="article-list">
            <h1>Articles</h1>
    
            {console.log("articles: ", props)}
            {props.articles.map(article => (
                <h2>test</h2>
            ))}
        </section>

        {/* if on user dashboard, show articleForm */}
        {history.location.pathname === "/UserDashboard" //need to set this up differently, this will actually be "previous" pathname
            ? <>
                <ArticleForm/>
                </>
            : ""
        } 

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