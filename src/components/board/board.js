import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
//import { useParams } from "react-router-dom";

export default function Board (props) {
    //console.log("BoardProps ", props.boards);
    //const {BoardID} = useParams();
    //console.log("Boards ID ", BoardID);
    //const boardBit = props.boards.find( boardEl => boardEl.id === Number(BoardID))
    //console.log("boardBits ", boardBit)
    
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Name: {props.boardName}</CardTitle>
                    <CardText>Description: {props.boardDescription}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
