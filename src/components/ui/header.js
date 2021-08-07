import React from 'react';
import { AppBar, Toolbar, useScrollTrigger, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles'; // A- using makeStyles to solve a problem


function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
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
        ...theme.mixins.toolbar
    }
}));

export default function Header(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" >

                    <Toolbar>
                        <Typography variant="h3"  >
                            Arc development
                        </Typography>

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* A - using make styles to push content down the tool bar adding a margin */}
            <div className={classes.toolbarMargin} />
            {/* react fragment encloses react div without affecting the code in any way */}
        </React.Fragment>
    )

}