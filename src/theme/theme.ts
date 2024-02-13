import {createTheme} from '@mui/material/styles';

export const theme = createTheme ({
    palette: {
        primary:{
            main: '#00796b'  //color cerceta
        },
        secondary: {
            main: '#ffab00'  // color ambar
        },
        error: {
            main: '#d32f2f' //color rojo
        },
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              color: 'white',
              '&.MuiButton-containedPrimary': {
                backgroundColor: '#00796B',
                '&:hover': {
                  backgroundColor: '#005A4F',
                },
              },
            },
          },
        },
        MuiChip: {
            styleOverrides: {
              root: {
                backgroundColor: '#00796B',
                color: '#FFFFFF',
                '&.MuiChip-outlined': {
                  borderColor: '#FFAB00',
                  color: '#FFAB00',
                },
              },
            },
        },
        MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: '#004D40',
              },
            },
        },
    },
    typography: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        body1: {
          fontSize: '16px',
        },
        h1: {
          fontWeight: 500,
        },
    },
})