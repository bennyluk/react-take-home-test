import { createTheme } from "@mui/material/styles";

import colors from "./colors";

const mui = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      primary: colors.textLight,
      secondary: colors.textDark,
    },
  },
  typography: {
    fontFamily: "ProximaNova, Helvetica, Arial, serif",
    h1: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "2.8rem",
      color: colors.textLight,
      lineHeight: 1,
      letterSpacing: "-1px",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "2.5rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-0.75px",
    },
    h3: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "24px",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-1px",
    },
    h4: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "15px",
      textTransform: "uppercase",
      color: colors.primary,
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: "0.08em",
    },
    h6: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "11px",
      opacity: "0.7",
      color: colors.textLight,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '2.5px'
    },
    body1: {
      color: colors.textLight,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: "1rem",
      color: colors.textLight,
    },
    caption: {
      fontWeight: 500,
      letterSpacing: "1px",
      fontSize: "0.6rem",
      lineHeight: 1,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          paddingTop: "80px",
          background: colors.secondaryVariant2,
          font: '112.5%/1.45em georgia,serif',
          marginBottom: "200px"
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: `1px solid ${colors.secondaryVariant1}`,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 80,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: colors.secondaryVariant1,
          padding: "8px",
          fontSize: "14px",
          color: colors.textLight,
          letterSpacing: "0.02em",
          minWidth: "100px",
        },
        icon: {
          color: colors.primary,
        }
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          background: colors.secondaryVariant1,
          letterSpacing: "0.02em",
          fontWeight: 600
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.6rem",
          fontWeight: "bold",
          borderRadius: "30px",
          letterSpacing: "1px",
          padding: "12px 28px",
        },
        outlinedPrimary: {
          borderWidth: "2px",
          color: colors.primary,

          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
  },
});

export default mui;
