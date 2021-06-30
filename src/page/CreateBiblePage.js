import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../component/Header';
import BibleForm from '../component/BibleForm';

export function CreateBiblePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <BibleForm type={'create'}/>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
}));
