import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00AB8D"
        }
    },
    typography: {
        fontFamily: ['Montserrat'].join(',')
    },
});

export default theme;