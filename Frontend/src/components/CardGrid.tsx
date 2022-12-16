import { Container, Grid } from '@mui/material';
import { YGOCard } from './Card';
import React from 'react';

export const YGOGrid = () => {
    return(
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }}
                alignItems="center"
            >
                <Grid item>
                    <YGOCard />
                </Grid>
                <Grid item>
                    <YGOCard />
                </Grid>
                <Grid item>
                    <YGOCard />
                </Grid>
                <Grid item>
                    <YGOCard />
                </Grid>
                <Grid item>
                    <YGOCard />
                </Grid>
                <Grid item>
                    <YGOCard />
                </Grid>
                <Grid item>
                    <YGOCard />
                </Grid>
                <Grid item>
                    <YGOCard />
                </Grid>
                <Grid item>
                    <YGOCard />
                </Grid>
            </Grid>
    )
}