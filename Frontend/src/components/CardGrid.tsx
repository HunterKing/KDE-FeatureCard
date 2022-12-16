import { Box } from '@mui/material';
import { YGOCard } from './Card';
import React from 'react';

export const YGOGrid = () => {
    return(
        <Box>
            <YGOCard />
            <YGOCard />
            <YGOCard />
            <YGOCard />
        </Box>
    )
}