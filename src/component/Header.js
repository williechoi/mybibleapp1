import React, { useState } from 'react';
import { AppBar, Toolbar, Button,IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@material-ui/core';
import { Menu as MenuIcon, Add as AddIcon, Search as SearchIcon, List as ListIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { history } from "../App";
import { connect } from 'react-redux';

function Header(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>setOpen(!open)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {/*test*/}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor={'left'} open={open} onClose={()=>setOpen(!open)}>
                <List>
                    <ListItem button onClick={ ()=>history.push('/create-bible') }>
                        <ListItemIcon>
                            <AddIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Create Bible'}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Search Bible'}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ListIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'Bible List'} onClick={()=>history.push('/bible-list')}/>
                    </ListItem>
                </List>
            </Drawer>
        </div>        
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default Header;