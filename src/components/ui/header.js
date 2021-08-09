import React, { useEffect } from 'react';
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'; // A- using makeStyles to solve a problem
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';







function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,

    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}






const useStyles = makeStyles(theme => ({ // A - using make styles to push content down the tool bar adding a margin
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "5em",
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "15px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "10px",
        marginRight: "15px"

    },
    logoContainer: {
        padding: "0", //eliminate the padding around the logo
        "&:hover": {
            background: "transparent",
        }
    },
    menu: {
        backgroundColor: theme.palette.common.Blue,
        color: "white"
    },
    menuItem: {
        ...theme.typography.tab
    }

}));




export default function Header(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);



    const handleChange = (e, value) => {
        setValue(value);
    };


    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1);
        }
        else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2);
        }
        else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3);
        }
        else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4);
        }
        else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5);
        }


    }, [value]); // A - using useEffect to set the value of the state to prevent running indifenently

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" >

                    <Toolbar disableGutters>
                        <Button
                            disableRipple // A - using disableRipple to prevent the logo shinning on hover
                            onClick={() => setValue(0)} // A - using onClick to set the value of the state
                            component={Link} to="/"  // A - using Link to set the value of the state
                            className={classes.logoContainer} >
                            <img src={logo} className={classes.logo} alt="Company logo" />
                        </Button>
                        <Tabs
                            // indicatorColor="secondary"
                            value={value} onChange={handleChange} className={classes.tabContainer}  >
                            <Tab
                                className={classes.tab}
                                component={Link} to="/"
                                label="Home" />

                            <Tab
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? "true" : undefined}
                                onMouseOver={event => handleClick(event)}
                                className={classes.tab}
                                component={Link} to="/services"
                                label="services"


                            />
                            <Tab className={classes.tab} component={Link} to="/revolution" label="The revolution" />
                            <Tab className={classes.tab} component={Link} to="/about" label="About us" />
                            <Tab className={classes.tab} component={Link} to="/contact" label="Contact us" />
                        </Tabs>
                        <Button

                            component={Link} to="/estimate"
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        > Free Estimate</Button>
                        <Menu

                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            classes={{ paper: classes.menu }}
                            MenuListProps={{ onMouseLeave: handleClose }}
                        // elevation={0}
                        >

                            <MenuItem classes={{ root: classes.menuItem }} onClick={() => { handleClose(); setValue(1) }} component={Link} to="/services" > Services</MenuItem>
                            <MenuItem classes={{ root: classes.menuItem }} onClick={() => { handleClose(); setValue(1) }} component={Link} to="/customsoftware" > Custom Software</MenuItem>
                            <MenuItem classes={{ root: classes.menuItem }} onClick={() => { handleClose(); setValue(1) }} component={Link} to="/mobileapps"> Mobile Dev</MenuItem>
                            <MenuItem classes={{ root: classes.menuItem }} onClick={() => { handleClose(); setValue(1) }} component={Link} to="/websites"> Website Dev</MenuItem>

                        </Menu>

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* A - using make styles to push content down the tool bar adding a margin */}
            <div className={classes.toolbarMargin} />

            {/* react fragment encloses react div without affecting the code in any way */}
        </React.Fragment>
    )

}