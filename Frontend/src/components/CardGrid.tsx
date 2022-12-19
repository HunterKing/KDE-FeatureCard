import { Grid } from '@mui/material';
import { YGOCard, YGOCardProps } from './Card';
import React from 'react';
import { CenterContentBox } from '../layout/centerContentBox';

interface YGOGridProps{
    cards: YGOCardProps[]
}

export const YGOGrid: React.FC<YGOGridProps> = ( {cards} ) => {

    const elementsToRender = cards.map((props) =>(
        <Grid item>
            <YGOCard {...props} />
        </Grid>
    ));

    return(
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }}
                alignItems="center"
            >
                {elementsToRender}
            </Grid>
    )
}