import { createTheme } from "@mui/material"

export const CustomTheme = createTheme({
    colorSchemes: {
        light: true, dark: true
    },
    palette: {
        primary: {
            // blue
            light: '#84fcf3',
            main: '#66FCF1',
            dark: '#47b0a8',
            contrastText: '#FAF4F4',
        },
        secondary: {
            // black
            light: '#151c23',
            main: '#1F2833',
            dark: '#4b535b',
            contrastText: '#FAF4F4',
        }
    },
    typography: {
        fontFamily: ["Oswald", "Pixelify Sans", "roboto"].join(','),
    },

    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    minWidth: '100vh'
                }
            }
        }
    },
})