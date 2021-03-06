import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import { commons } from '../../commons/languages/en';
import { MainDrawer } from '../Menu/MainDrawer';

const MainHeader = () => {
  const [isDrawerOpen, setOpen] = useState<boolean>(false);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon color="primary" />
          </IconButton>
          <Typography>
            {commons.header}
          </Typography>
          <Button>Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={() => setOpen(false)}>
        <MainDrawer />
      </Drawer>
    </div>
  );
};

export default MainHeader;