import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00AB8D"
        },
        secondary: {
            main: "#779CA6"
        }
    },
    typography: {
        fontFamily: ['Montserrat'].join(',')
    },
});

export default theme;