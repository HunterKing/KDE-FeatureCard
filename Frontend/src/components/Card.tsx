import { Card, CardActionArea, CardMedia, Select } from "@mui/material";
import React, { useMemo, useState } from "react";
import { CenterContentBox } from "../layout/CenterContentBox";

/**
 * Interface for a YGOCard,
 * We might take more options in the future (Card Text, )
 */
export interface YGOCardProps {
  image: string;
  name: string;
}

export const YGOCard: React.FC<YGOCardProps> = ({ image, name }) => {
  const [cardScale, setScale] = useState(1);

  //TODO: Would like to have the cute hover-over zoom-in; This seems advanced.
  const handleHover = (isHovered: boolean) => {
    if (isHovered) {
      setScale(1.2);
    } else {
      setScale(1);
    }
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (clickEvent) => {
    console.log("Hello!");
    console.log(clickEvent);

  };

  const cardMedia = useMemo(
    () => <CardMedia
     component="img" 
     src={image} 
     alt={name} 
    />,
    [image, name]
  );

  return (
    <CenterContentBox>
        <Card
          onClick={handleClick}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <CardActionArea>
            {cardMedia}
          </CardActionArea>
        </Card>
    </CenterContentBox>
  );
};
