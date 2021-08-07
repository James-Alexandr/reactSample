import React from 'react';
import {
    AppBar,
    Toolbar,
    useScrollTrigger,
    Tabs,
    Tab,
    Button
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles'; // A- using makeStyles to solve a problem

import logo from '../../assets/logo.svg';


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

    }


}));

export default function Header(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" >

                    <Toolbar disableGutters>

                        <img src={logo} className={classes.logo} alt="Company logo" />
                        <Tabs value={1} className={classes.tabContainer}  >
                            <Tab className={classes.tab} label="Home" value="home" />
                            <Tab className={classes.tab} label="Services" value="profile" />
                            <Tab className={classes.tab} label="The revolution" value="messages" />
                            <Tab className={classes.tab} label="About us" value="messages" />
                            <Tab className={classes.tab} label="Contact us" value="messages" />
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}> Free Estimate</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* A - using make styles to push content down the tool bar adding a margin */}
            <div className={classes.toolbarMargin} />

            {/* react fragment encloses react div without affecting the code in any way */}
        </React.Fragment>
    )

}