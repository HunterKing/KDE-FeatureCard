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
    const handleHover: React.MouseEventHandler<HTMLDivElement> = (hoverEvent) =>{
        console.log("Hello!");
    }

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (clickEvent) =>{
        console.log("Hello!");
        console.log(clickEvent);
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