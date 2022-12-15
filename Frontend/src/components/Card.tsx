import { Card, Col, Container, Row} from "react-bootstrap";
import React from "react";

export const YGOCard = () =>{

    function handleHover(e: any){
        console.log("Hello!");
    }

    function handleClick(e: any){
        console.log("Hello!");
        console.log(e);
    }

    return(
        <Card
            className="bg-dark text-white px-md1"
            onClick={handleClick} 
            onMouseEnter={handleHover} 
            onMouseLeave={handleHover}
        >
            <Card.Img src='./cardData/Images/95440946.jpg' alt="Eldlich the Golden Lord"/>
        </Card>
    )
}