import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { history } from "../App";
import { connect } from 'react-redux';
import { bibleDetail, loadBibles } from '../actions/bibles';
import { useEffect } from 'react';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

function BibleTable(props) {
    const classes = useStyles();

    useEffect(() => {
        props.loadBibles();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Version</TableCell>
                        <TableCell>Book</TableCell>
                        <TableCell align="right">Chapter</TableCell>
                        <TableCell aligh="right">Verse</TableCell>
                        <TableCell>Content</TableCell>
                        <TableCell>Language</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.bibles.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.version}
                            </TableCell>
                            <TableCell >{row.book}</TableCell>
                            <TableCell align="right">{row.chapter}</TableCell>
                            <TableCell align="right">{row.verse}</TableCell>
                            <TableCell>{row.content}</TableCell>
                            <TableCell>{row.lang}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={()=>{props.bibleDetail(row.id, props.bibles);history.push('/bible/' + row.id)}}>
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state => ({
    bibles: state.bibles.bibles
})

const mapDispatchToProps = dispatch => ({
    bibleDetail: (id, bibles) => dispatch(bibleDetail(id, bibles)),
    loadBibles: () => dispatch(loadBibles())
})

export default connect(  mapStateToProps,
    mapDispatchToProps)(BibleTable)