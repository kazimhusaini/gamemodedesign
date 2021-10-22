import { Avatar, Badge, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import logo from "./images/logo.png";
import profilepic from "./images/kazimpic.jpg";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import WindowTwoToneIcon from '@mui/icons-material/WindowTwoTone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import OnlinePredictionSharpIcon from '@mui/icons-material/OnlinePredictionSharp';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import Store from './pages/Store';
import Home from './pages/Home';
const useStyles = makeStyles(theme => ({
  // wrapper:{overflow:"hidden"},
  container: {
    position: "sticky",
    top: 0,
    left: 0,
    overflow: "hidden",
    backgroundColor: "#141414",
    height: "100vh",
    padding: "50px 25px 0",
    [theme.breakpoints.down("sm")]:{
      padding: "41px 6px 0",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    padding: "12px 37px",
    borderRadius: "12px",
    '&:hover ': {
      backgroundColor: "#2F2F2F",

    },
    '&:hover svg': {
      color: "white",
    },
    '&:hover p': {
      color: "white",
    },
    [theme.breakpoints.down("sm")]:{
      padding: "12px",
    },

  },
  icon: {
    fontSize: "20px",
    color: " rgba(235, 235, 245, 0.6)",
    marginRight: "12px",
  },
  texts: {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "18px",
    color: " rgba(235, 235, 245, 0.6)",
    [theme.breakpoints.down("sm")]:{
      display:"none",
    },
  },
  logoholder: {
    marginBottom: "40px",
  },

  avatar: {
    width: "24px",
    height: "24px",
    marginRight: "12px",
  },
  link: {
    textDecoration: "none",
  },
  router: {
    width: "100%",
  },
active:{
  backgroundColor: "#2F2F2F",
  display:"block",
  borderRadius: "12px",
  '& svg': {
    color: "white",
  },
  '& p': {
    color: "white",
  }
},
}))

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    // boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    right: " 43%",
    bottom: "5px",
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>

      <Router className={classes.router}>
        <Grid container >
          <Grid xs={2}>
            <Container className={classes.container}>
              <div className={classes.logoholder}>
                <img src={logo} />
              </div>
              <div className="App">
                <NavLink activeClassName={classes.active}      className={classes.link} to="/" >
                  <div className={classes.item}>
                    <HomeRoundedIcon className={classes.icon} />
                    <Typography className={classes.texts}>
                      Home
                    </Typography>
                  </div>
                </NavLink>
                <NavLink activeClassName={classes.active}     className={classes.link} to="/store">
                  <div className={classes.item}>
                    <LocalFireDepartmentSharpIcon className={classes.icon} />
                    <Typography className={classes.texts}>
                      Store
                    </Typography>
                  </div>
                </NavLink>

{/* 
                <NavLink activeClassName={classes.active}     className={classes.link} to="/">
                  <div className={classes.item}>
                    <WindowTwoToneIcon className={classes.icon} />
                    <Typography className={classes.texts}>
                      Library
                    </Typography>
                  </div>
                </NavLink>
                <NavLink activeClassName={classes.active}     className={classes.link} to="/">
                  <div className={classes.item}>
                    <PeopleAltIcon className={classes.icon} />
                    <Typography className={classes.texts}>
                      Friends
                    </Typography>
                  </div>
                </NavLink>


                <NavLink activeClassName={classes.active}     className={classes.link} to="/">
                  <div className={classes.item}>
                    <OnlinePredictionSharpIcon className={classes.icon} />
                    <Typography className={classes.texts}>
                      Live
                    </Typography>
                  </div>
                </NavLink>


                <NavLink activeClassName={classes.active}     className={classes.link} to="/">
                  <div className={classes.item}>
                    <FileDownloadOutlinedIcon className={classes.icon} />
                    <Typography className={classes.texts}>
                      Downloads
                    </Typography>
                  </div>
                </NavLink>


                <NavLink activeClassName={classes.active}     className={classes.link} to="/">
                  <div className={classes.item}>
                    <SettingsIcon className={classes.icon} />
                    <Typography className={classes.texts}>
                      Settings
                    </Typography>
                  </div>
                </NavLink>
                <div className={classes.item}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar className={classes.avatar} alt="kazim husaini" src={profilepic} />
                  </StyledBadge>
                  <Typography className={classes.texts}>
                    Kazim Husaini
                  </Typography>
                </div> */}
              </div>
            </Container>
          </Grid>
          <Grid xs={10}>
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route exact path="/store" > 
                <Store />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Router>


    </div>
  );
}

export default App;
