import React from 'react'
import { List, ListItem } from '@material-ui/core';
import { BrowserRouter, Link } from 'react-router-dom';

export const MainDrawer = () => {
    return(
        <List>
        
            <ListItem> <a href="/register">Registration</a></ListItem>
            <ListItem> Devices </ListItem>
        </List>
    )
}