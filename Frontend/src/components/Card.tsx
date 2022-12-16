import { Card, CardMedia } from "@mui/material";
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
            onClick={handleClick} 
            onMouseEnter={handleHover} 
            onMouseLeave={handleHover}
        >
            <CardMedia 
                component="img" 
                src='./cardData/Images/95440946.jpg' 
                alt="Eldlich the Golden Lord"
            />
        </Card>
    )
}