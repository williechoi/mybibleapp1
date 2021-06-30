import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../component/Header';
import BibleForm from '../component/BibleForm';
import { useParams } from "react-router";

export function BibleDetailPage(props) {
    const classes = useStyles();
    let { id } = useParams();

    return (
        <div className={classes.root}>
            <Header />
            <BibleForm type={'detail'} id={id}/>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
}));
