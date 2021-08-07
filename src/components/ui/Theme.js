
import { createTheme } from '@material-ui/core/styles';


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
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: "None",
            fontWeight: "700",
            fontSize: "1rem",

        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
        }
    }
});