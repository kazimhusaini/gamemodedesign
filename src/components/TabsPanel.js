import { React, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha, AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { Cancel, Notifications, Search } from '@mui/icons-material';
import InputBase from '@mui/material/InputBase';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import VerticalTabs from './VerticalTabs';
import CardSlider from './CardSlider';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = makeStyles(theme => ({

    toolbar: {
        backgroundColor: "#141414",
        margin: "60px 0 0"
    },
    appbar: {
        backgroundColor: "#141414",
    },
    box: {
        width: "100%",
        overflow: "hidden",
    },
    rightarea: {
        display: "flex",
        width: "100%",
        overflow: "hidden",
        justifyContent: "end",
        alignItems: "center",
    },
    leftarea: {
        display: "flex",
        width: "100%",
        overflow: "hidden",

    },
    tab: {
        height: "32px  !important",
        width: "78px !important",
        fontSize: "14px  !important",
        fontWeight: "600 !important",
        lineHeight: "18px  !important",
        padding: "0  !important",
        zIndex: 9,
        color: "#ffffff  !important",
        marginRight: "12px",
    },
    indicator: {
        height: "100%  !important",
        marginRight: "12px",
        backgroundColor: "#0061FD !important",
        borderRadius: "143px  !important ",
        color: "#ffffff  !important",
    },

    search: {
        display: "flex",
        alignItems: "center",
        width: "318px",
        backgroundColor: "#2F2F2F",
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        height: "36px",
        borderRadius: "24px",

        [theme.breakpoints.down("sm")]: {
            display: (props) => props.open ? "flex" : "none"
        }
    },
    input: {
        color: "#fffff",
        marginLeft: theme.spacing(2),

    },
    searchIcon: {
        marginLeft: theme.spacing(2),
    },
    icons: {
        display: "flex",
        alignItems: "center",
        marginRight: "32px",
        [theme.breakpoints.down("sm")]: {
            display: (props) => props.open ? "none" : "flex"
        }
    },
    badge: {
        marginRight: theme.spacing(3),
    },
    searchBtn: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none !important",
        }
    },
    cancel: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none !important",
        },
        [theme.breakpoints.down("sm")]: {
            display: (props) => props.open ? "flex" : "none"
        }
    },
}))

export default function BasicTabs() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [open, setopen] = useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar className={classes.toolbar}>
                        <Box className={classes.box}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs className={classes.leftarea} classes={{ indicator: classes.indicator }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab className={classes.tab} label="Discover" {...a11yProps(0)} />
                                    <Tab className={classes.tab} label="Browse" {...a11yProps(1)} />
                                    <Tab className={classes.tab} label="Wishlist" {...a11yProps(2)} />
                                    <div activeClassName={classes.active} className={classes.rightarea}>
                                        <div className={classes.icons}>
                                            <NotificationsNoneTwoToneIcon />

                                        </div>
                                        <div className={classes.search}>
                                            <Search className={classes.searchIcon} />
                                            <InputBase className={classes.input} placeholder="Search..."></InputBase>
                                            <Cancel className={classes.cancel} onClick={() => setopen(false)} />
                                        </div>
                                    </div>
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <VerticalTabs className={classes.verticaltab} />
                                <Typography variant="body2" style={{padding:"50px 0 30px",fontSize:"16px"}}>Games On Sale</Typography>
                                <CardSlider/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                          
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Item Three
                            </TabPanel>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}