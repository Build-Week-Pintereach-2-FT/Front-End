import React from 'react';
import {Card, CardBody } from "reactstrap";

export default function Article (props) {
    return (
         props.articles.map(article =>
            <Card className="newArticle">
                <CardBody>
                   <h2>{article.title}</h2>
                    <h3>{article.link}</h3>
                    <p>{article.categories}</p>
                    <p>{article.date}</p>
                </CardBody>
            </Card>
            )
    )}