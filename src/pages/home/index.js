import React from 'react';
import { Grid } from '@material-ui/core';
import Exemplo from '../../components/exemplo';

export default function Home() {
    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    <Exemplo />
                </Grid>
            </Grid>
        </Grid>
    );
}
