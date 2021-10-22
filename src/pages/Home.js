import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Container, Typography } from '@mui/material';
// import { Bookmark, Home, List, Person, PhotoCamera, PlayCircleOutline, TabletMac } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Header from '../components/Header';
const useStyles = makeStyles(theme => ({


    
}  
))
function Home() {
    const classes = useStyles();
    return (
      <>
      <Header/>
      </>
    );
}

export default Home;
