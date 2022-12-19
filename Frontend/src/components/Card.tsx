import { Card, CardMedia } from "@mui/material";
import React, { useMemo, useState } from "react";

/**
 * Interface for a YGOCard,
 * We might take more options in the future (Card Text, )
 */
export interface YGOCardProps {
  image: string;
  name: string;
}

export const YGOCard: React.FC<YGOCardProps> = ({ image, name }) => {
  const [scale, setScale] = useState(.95);

  const handleHover = (isHovered: boolean) => {
    if (isHovered) {
      console.log("true");
      setScale(1);
    } else {
      console.log("nay");
      setScale(.95);
    }
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (clickEvent) => {
    console.log("Hello!");
    console.log(clickEvent);
  };

  const cardMedia = useMemo(
    () => <CardMedia component="img" src={image} alt={name} />,
    [image, name]
  );

  return (
    <Box>
        <Card
        onClick={handleClick}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        sx={{ width: scale, height: scale}}
        >
            {cardMedia}
        </Card>
    </Box>

  );
};
