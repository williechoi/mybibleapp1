import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../component/Header';
import BibleTable from '../component/BibleTable';
import { Grid, Paper } from '@material-ui/core';

export function BibleListPage() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Header />

            <Grid container direction={'row'}>
                {/* <Grid item xs={2}  >

                </Grid> */}
                <Grid item xs={12}  >
                    <Paper>
                        <BibleTable />
                    </Paper>
                </Grid>
                {/* <Grid item xs={2}  >

                </Grid> */}
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
}));