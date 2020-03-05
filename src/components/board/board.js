import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
import "./board.css";
import ImgBit from "../../assets/background.png";

export default function Board (props) {
    
    return (
        <div>
            <img className='background-image' src={ImgBit} alt='backgroundimg'></img>
            <Card className='card-wrapper'>
                <CardBody className='card-body'>
                    <CardTitle className='card-title'>Name: {props.boardName}</CardTitle>
                    <CardText className='card-text'>Description: {props.boardDescription}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
