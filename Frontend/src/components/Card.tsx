import { Card, CardMedia } from "@mui/material";
import React from "react";

/**
 * Interface for a YGOCard,
 * We might take more options in the future (Card Text, )
 */
export interface YGOCardProps {
    image: string,
    name: string
}

export const YGOCard: React.FC<YGOCardProps> = ({image, name}) =>{
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
                style={{minWidth: 0, maxWidth: 200}} 
                component="img" 
                src={image}
                alt={name}
            />
        </Card>
    )
}