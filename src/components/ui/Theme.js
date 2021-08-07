import { Typography } from '@material-ui/core';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const arcBlue = "#0b72b9";
const arcOrange = "#FFBA60";
export default createTheme({
    palette: {
        common: {
            Blue: `${arcBlue}`,
            Orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {

            main: `${arcOrange}`,
        }
    },
    Typography: {
        h3: {
            fontWeight: "300"
        }
    }
});