import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './useStyles';

import imgAbout from '../../assets/image/exemplo.png';

export default function Exemplo() {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" className={classes.title}>
                        exemplo de titulo
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={5} className={classes.text}>
                    <Typography variant="h7" spacing={2}>
                        paragrafo
                    </Typography>

                    <Typography variant="h7">paragrafo</Typography>

                    <Typography variant="h7">paragrafo</Typography>

                    <Typography variant="h7">paragrafo</Typography>

                    <Typography variant="h5" className={classes.textFinal}>
                        paragrafo
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography>
                        <img
                            src={imgExemplo}
                            alt="Residencial"
                            className={classes.img}
                        />
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Exemplo;
