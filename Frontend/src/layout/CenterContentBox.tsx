import { Box } from '@mui/material';
import React from 'react';

export interface CenterContentBoxProps{
    children: any,
    overrides?: any
}

export const CenterContentBox: React.FC<CenterContentBoxProps> = ({children, overrides}) =>{
    return(
        <Box
            {...overrides}
            sx={{
                // backgroundColor: "white",
                p: 2,
                alignItems: "center",
                justifyContent: "center",
                maxWidth: 313
            }}
        >
            {children}
        </Box>
    );
}