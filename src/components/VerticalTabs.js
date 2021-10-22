import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';
import bannerimg from "../images/bannerimg.jpg";
import fortnitemg from "../images/fortnitemg.jpg";
import { Avatar, Button } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
const useStyles = makeStyles(theme => ({
    box: {
        height: "100%",
        padding: "0 !important",
        backgroundColor: "#141414",
        justifyContent: "space-between",
        flexDirection: "row-reverse !important",
    },
    tabPanel: {
        padding: "0 !important",
        width: "80%",
        marginRight: " 12px",
        height: "448px",
    },
    Tabs: {
        padding: "0 !important",
        backgroundColor: "#2F2F2F",
        width: "20%",
        borderRadius: "0 12px 12px 0",
        height: "448px",
        [theme.breakpoints.down("sm")]: {
            height: "50px",
            width: "100%",
            flexDirection: "row  !important",
            borderRadius: "0",
        }
    },
    tab: {
        display: "flex !important",

    },
    tabLabel: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "20px",
    },
    tabText: {
        fontSize: "14px",
        lineHeight: "18px",
        fontWeight: 600,
        color: "#ffffff",
        textTransform: "none",

    },
    banner: {
        backgroundImage: `url(${bannerimg})`,
        // width: "100%",
        height: "448px",
        borderRadius: "12px 0 0 12px",
        padding: "0 !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        padding: "18px 28px 32px",
        alignItems: "start",
        [theme.breakpoints.down("sm")]: {
            height: "200px",
            borderRadius: "0",
        }

    },
    indicator: {
        // translate: "82.9687px ",
        // height: "1px !important",
        // width: "125px !important",
        backgroundColor: " rgba(255, 255, 255, 1) !important",
        left: "0 !important",
        bottom: "0 important",
        // transform: "translateY(82.9687px)",]
    },
    title: {
        marginBottom: "191px !important ",
        fontWeight: "800 !important",
        fontSize: "26px !important",
        lineHeight: "33px !important",
        color: " #FFFFFF !important",
        textShadow: "0px 2px 2px rgba(0, 0, 0, 0.2) !important",
    },
    update: {
        marginBottom: "4px !important ",
        fontWeight: "600 !important",
        fontSize: "14px !important",
        lineHeight: "18px !important",
        color: " #FFFFFF !important",
        textShadow: "0px 2px 2px rgba(0, 0, 0, 0.2) !important",
    },
    info: {
        width: "446px",
        marginBottom: "28px !important ",
        fontWeight: "800 !important",
        fontSize: "24px !important",
        lineHeight: "34px !important",
        color: " #FFFFFF !important",
        textShadow: "0px 2px 2px rgba(0, 0, 0, 0.2) !important",
    },
    btn: {
        color: "#FFFFFF !important",
        padding: "16px 18px 16px 18px !important ",
        backgroundColor: "rgba(0, 97, 253, 1) !important",
        boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.16) !important",
        borderRadius: "14px!important",
    },
}))
export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box
            sx={{ flexGrow: 1, display: 'flex', }} className={classes.box}
        >
            <Tabs
                className={classes.Tabs}
                classes={{ indicator: classes.indicator }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                scrollButtons={false}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab className={classes.tab}
                    label={
                        <div className={classes.tabLabel} >
                            <img src={fortnitemg} className={classes.fortnitemg} />
                            <Typography className={classes.tabText} variant="body2">Fortnite</Typography>
                        </div>
                    }
                    {...a11yProps(0)}
                />
                <Tab
                    label={
                        <div className={classes.tabLabel} >
                            <img src={fortnitemg} className={classes.fortnitemg} />
                            <Typography className={classes.tabText} variant="body2">Fortnite</Typography>
                        </div>
                    }
                    {...a11yProps(1)} />
                <Tab
                    label={
                        <div className={classes.tabLabel} >
                            <img src={fortnitemg} className={classes.fortnitemg} />
                            <Typography className={classes.tabText} variant="body2">Fortnite</Typography>
                        </div>
                    }
                    {...a11yProps(2)} />
                <Tab
                    label={
                        <div className={classes.tabLabel} >
                            <img src={fortnitemg} className={classes.fortnitemg} />
                            <Typography className={classes.tabText} variant="body2">Fortnite</Typography>
                        </div>
                    }
                    {...a11yProps(3)} />
                <Tab
                    label={
                        <div className={classes.tabLabel} >
                            <img src={fortnitemg} className={classes.fortnitemg} />
                            <Typography className={classes.tabText} variant="body2">Fortnite</Typography>
                        </div>
                    }
                    {...a11yProps(4)} />
                <Tab
                    label={
                        <div className={classes.tabLabel} >
                            <img src={fortnitemg} className={classes.fortnitemg} />
                            <Typography className={classes.tabText} variant="body2">Fortnite</Typography>
                        </div>
                    }
                    {...a11yProps(5)} />
            </Tabs>
            <TabPanel className={classes.tabPanel} value={value} index={0}>
                <div className={classes.banner}>
                    <Typography variant="h6" className={classes.title} >Fortnite</Typography>
                    <Typography variant="body2" className={classes.update} >Update</Typography>
                    <Typography variant="h6" className={classes.info} >
                        The hunt is on in Fortnite Chapter 2 -
                        Season 5: Zero Point.
                    </Typography>
                    <Button className={classes.btn} endIcon={<ArrowForwardOutlinedIcon />}>Play for free</Button>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
                <div className={classes.banner}>
                    <Typography variant="h6" className={classes.title} >Fortnite</Typography>
                    <Typography variant="body2" className={classes.update} >Update</Typography>
                    <Typography variant="h6" className={classes.info} >
                        The hunt is on in Fortnite Chapter 2 -
                        Season 5: Zero Point.
                    </Typography>
                    <Button className={classes.btn} endIcon={<ArrowForwardOutlinedIcon />}>Play for free</Button>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
                <div className={classes.banner}>
                    <Typography variant="h6" className={classes.title} >Fortnite</Typography>
                    <Typography variant="body2" className={classes.update} >Update</Typography>
                    <Typography variant="h6" className={classes.info} >
                        The hunt is on in Fortnite Chapter 2 -
                        Season 5: Zero Point.
                    </Typography>
                    <Button className={classes.btn} endIcon={<ArrowForwardOutlinedIcon />}>Play for free</Button>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={3}>
                <div className={classes.banner}>
                    <Typography variant="h6" className={classes.title} >Fortnite</Typography>
                    <Typography variant="body2" className={classes.update} >Update</Typography>
                    <Typography variant="h6" className={classes.info} >
                        The hunt is on in Fortnite Chapter 2 -
                        Season 5: Zero Point.
                    </Typography>
                    <Button className={classes.btn} endIcon={<ArrowForwardOutlinedIcon />}>Play for free</Button>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={4}>
                <div className={classes.banner}>
                    <Typography variant="h6" className={classes.title} >Fortnite</Typography>
                    <Typography variant="body2" className={classes.update} >Update</Typography>
                    <Typography variant="h6" className={classes.info} >
                        The hunt is on in Fortnite Chapter 2 -
                        Season 5: Zero Point.
                    </Typography>
                    <Button className={classes.btn} endIcon={<ArrowForwardOutlinedIcon />}>Play for free</Button>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={5}>
                <div className={classes.banner}>
                    <Typography variant="h6" className={classes.title} >Fortnite</Typography>
                    <Typography variant="body2" className={classes.update} >Update</Typography>
                    <Typography variant="h6" className={classes.info} >
                        The hunt is on in Fortnite Chapter 2 -
                        Season 5: Zero Point.
                    </Typography>
                    <Button className={classes.btn} endIcon={<ArrowForwardOutlinedIcon />}>Play for free</Button>
                </div>
            </TabPanel>
        </Box>
    );
}
