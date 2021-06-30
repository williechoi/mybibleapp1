import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { updateCurrentBibleState, addBible, updateBible, deleteBible } from '../actions/bibles';
import { history } from "../App";

function BibleForm(props) {
    const classes = useStyles();

    const { type } = props;
    console.log(type);

    return (
        <div className={classes.root}>
            <Grid container direction={'row'}>
                {/* <Grid item xs={4}  >

                </Grid> */}
                <Grid item xs={12}  >
                    <Paper>
                        <Grid container direction={'column'}>
                            <br/>
                            {type==='detail' &&
                                <TextField label={'ID'} 
                                    variant="outlined" 
                                    value={props.currentBible.id} 
                                    disabled
                                />
                            }
                            <br/>
                            <TextField label={'Version Name'} 
                                variant="outlined"
                                value={props.currentBible.version} 
                                onChange={event => props.updateCurrentBibleState('version', event.target.value, props.currentBible)}
                            />
                            <br/>
                            <TextField label={'Book Name'} 
                                variant="outlined"
                                value={props.currentBible.book} 
                                onChange={event => props.updateCurrentBibleState('book', event.target.value,props.currentBible)}
                            />
                            <br/>
                            <TextField label={'Chapter No'} 
                                variant="outlined" 
                                type={"number"}
                                value={props.currentBible.chapter} 
                                onChange={event => props.updateCurrentBibleState('chapter', event.target.value,props.currentBible)}
                            />
                            <br/>
                            <TextField label={'Verse No'} variant="outlined"
                                value={props.currentBible.verse} 
                                type={"number"}
                                onChange={event => props.updateCurrentBibleState('verse', event.target.value,props.currentBible)}
                            />
                            <br/>
                            <TextField label={'Content'} 
                                variant="outlined" 
                                value={props.currentBible.content} 
                                onChange={event => props.updateCurrentBibleState('content',event.target.value,props.currentBible)}
                            />
                            <br/>
                            <TextField label={'Language'} 
                                variant="outlined"
                                value={props.currentBible.lang} 
                                onChange={event => props.updateCurrentBibleState('lang',event.target.value,props.currentBible)}
                            />
                            <br/>

                            {type==='create' ? (
                                <Button variant="contained" color="primary"
                                    onClick={()=> {props.addBible(props.currentBible);history.push('/bible-list')}}
                                >
                                    Save
                                </Button>
                            ):(
                                <Grid container direction={'row'}>
                                    <Grid item xs={5}>
                                        <Button variant="contained" color="primary"
                                            onClick={()=> {props.updateBible(props.currentBible);history.push('/bible-list')}}
                                        >
                                            Save
                                        </Button>
                                    </Grid>
                                    <Grid item item xs={2}>
                                    </Grid>
                                    <Grid item item xs={5}>
                                        <Button variant="contained" color="primary"
                                            onClick={()=> {props.deleteBible(props.currentBible.id);history.push('/bible-list')}}
                                        >
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                                )
                            }
                        </Grid>
                    </Paper>

                </Grid>
                {/* <Grid item xs={4}  >

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

const mapStateToProps = state => ({
    currentBible: state.bibles.currentBible
})

const mapDispatchToProps = dispatch => ({
    updateCurrentBibleState: (fieldName, value, order) => dispatch(updateCurrentBibleState(fieldName, value, order)),
    addBible: (bible) => dispatch(addBible(bible)),
    updateBible: (bible) => dispatch(updateBible(bible)),
    deleteBible: (id) => dispatch(deleteBible(id)),
})

export default connect(  mapStateToProps,
    mapDispatchToProps)(BibleForm)