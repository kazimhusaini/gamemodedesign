import { Avatar, Badge, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BasicTabs from './TabsPanel';
const useStyles = makeStyles(theme => ({

}))


function Header() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
            <BasicTabs/>
    </div>
  );
}

export default Header;
