import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
import "./board.css";

export default function Board (props) {
    //console.log("BoardProps ", props.boards);
    //const {BoardID} = useParams();
    //console.log("Boards ID ", BoardID);
    //const boardBit = props.boards.find( boardEl => boardEl.id === Number(BoardID))
    //console.log("boardBits ", boardBit)
    
    return (
        <div>
            <Card className='card-wrapper'>
                <CardBody className='card-body'>
                    <CardTitle className='card-title'>Name: {props.boardName}</CardTitle>
                    <CardText className='card-text'>Description: {props.boardDescription}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
