import { Card, CardMedia, makeStyles } from "@mui/material";
import React, { useState } from "react";

/**
 * Interface for a YGOCard,
 * We might take more options in the future (Card Text, )
 */
export interface YGOCardProps {
    image: string,
    name: string
}

export const YGOCard: React.FC<YGOCardProps> = ({image, name}) =>{
    const [scale, setScale] = useState(0);
    const useStyles = makeStyles((theme: any) => ({
        YGOCardStyle: {
            minWidth: 0, 
            maxWidth: 200,
            '&:hover':{
                transform: `scale(${scale})`,
                transition: "transform 0.2s"
            }
        },
    }));
    
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
                component="img" 
                src={image}
                alt={name}
            />
        </Card>
    )
}