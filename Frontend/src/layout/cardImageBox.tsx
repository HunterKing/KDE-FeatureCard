import { Box } from '@mui/material';
import React from 'react';

export interface CenterContentBoxProps{
    children: any,
    overrides: any
}

export const CenterContentBox: React.FC<CenterContentBoxProps> = ({children, overrides}) =>{
    return(
        <Box
            {...overrides}
        >
            {children}
        </Box>
    );
}