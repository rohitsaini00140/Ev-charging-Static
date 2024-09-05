import CssBaseline from '@mui/material/CssBaseline';
import { useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

// ----------------------------------------------------------------------

function ThemeProvider({ children }) {
    const memoizedValue = useMemo(
        () => ({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 600,
                    md: 768,
                    lg: 992,
                    xl: 1200,
                },
            },
        }),
        []
    );

    const theme = createTheme(memoizedValue);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}

export default ThemeProvider;