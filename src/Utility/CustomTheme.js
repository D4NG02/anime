import { createTheme } from "@mui/material"

export const CustomTheme = createTheme({
    colorSchemes: {
        light: true
    },
    palette: {
        primary: {
            // blue
            light: '#84fcf3',
            main: '#66FCF1',
            dark: '#47b0a8',
            contrastText: '#212121',
        },
        secondary: {
            // black
            light: '#4b535b',
            main: '#1F2833',
            dark: '#151c23',
            contrastText: '#f5f5f5',
        }
    },
    typography: {
        fontFamily: ["Oswald", "Pixelify Sans", "open sans"].join(','),
    },

    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    minHeight: '86vh'
                }
            }
        },

        MuiModal: {
            styleOverrides: {
                root: {
                    '&.MuiPopover-root .MuiPopover-paper': {
                        backgroundColor: 'rgba(75, 83, 91, 0.8)',
                        backdropFilter: 'blur(4px)',
                        color: 'white'
                    }
                },
            },
        },
    },
})