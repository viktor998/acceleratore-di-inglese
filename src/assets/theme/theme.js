import { createTheme } from "@mui/material/styles";

import PoppinsMedium from "../fonts/Poppins-Medium.ttf";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      light: "#6B5F8B",
      main: "#8065C9",
      dark: "#2D224C",
    },
    secondary: {
      main: "#74DFAC",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-display: swap;
            font-weight: medium;
            src: local('Poppins'), url(${PoppinsMedium}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
    MuiInput: {
      styleOverrides: {
        root: {
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "22px",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "24px",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "32px",
          },
          ["@media (min-width:1920px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "42px",
          },

          fontSize: "24px",
          color: "#2D224C",
          "&.Mui-error:after": {
            borderBottomColor: "#FF006B",
          },
        },
        input: {
          "&::placeholder": {
            opacity: "0.5",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "11px",
          color: "#FF006B",
          fontWeight: "500",
          marginBottom: "3rem",
          marginLeft: "0",
          marginRight: "0",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: "flex",
          maxWidth: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          width: "120px",
          fontSize: "16px",
          borderRadius: "10px",
          color: "#31602A",
          fontWeight: "700",
          "&:hover": {
            backgroundColor: "#74dfab99",
          },
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "14px",
            width: "100px",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "15px",
            width: "110px",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "16px",
            width: "120px",
          },
          ["@media (min-width:1920px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "28px",
            width: "200px",
          },
        },
        sizeSmall: {
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            minWidth: "7px",
            marginLeft: "13px",
            padding: "4px 6px",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            minWidth: "8px",
            padding: "6px 8px",
            marginLeft: "13px",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key
            minWidth: "10px",
            padding: "8px 10px",
            marginLeft: "13px",
          },
          ["@media (min-width:1920px)"]: {
            // eslint-disable-line no-useless-computed-key
            minWidth: "18px",
            padding: "14px 18px",
            marginLeft: "20px",
            aspectRatio: "1 / 1",
          },
          minWidth: "10px",
          padding: "12px 14px",
          borderRadius: "50%",
          color: "white",
        },
        outlined: {
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "12px",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "13px",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "14px",
          },
          marginTop: "0.5rem",
          padding: "5px 0",
          backgroundColor: "white",
          "&.selected": {
            backgroundColor: "#8065c9",
            color: "white",
          },
        },
        contained: {
          marginTop: "0.5rem",
          fontWeight: "700",
          color: "#31602A",
          "&:hover": {
            backgroundColor: "#74dfab99",
          },
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "12px",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "13px",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "14px",
          },
        },
      },
    },
    MuiPickerStaticWrapper: {
      styleOverrides: {
        content: {
          backgroundColor: "transparent",
          minWidth: "265px",
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          color: "#8065C9",
          padding: "0",
        },
        label: {
          marginRight: "0",
        },
        labelContainer: {
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "16px",
            marginLeft: "0",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "20px",
            marginLeft: "0",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "24px",
            marginLeft: "0",
          },
          fontSize: "28px",
          fontWeight: "700",
          marginLeft: "auto",
        },
        switchViewButton: {
          display: "none",
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: {
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          justifyContent: "space-between",
          width: "310px",
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            width: "13px",

            position: "static",
            transform: "translateX(-25px)",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            width: "20px",

            position: "unset",
            transform: "translateX(-20px)",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key

            position: "static",
            zIndex: "2",
            transform: "translateX(-20px)",
          },
          "& svg": {
            fontSize: "2rem",
            ["@media (min-width:768px)"]: {
              // eslint-disable-line no-useless-computed-key
              width: "13px",
              height: "13px",
            },
            ["@media (min-width:1024px)"]: {
              // eslint-disable-line no-useless-computed-key
              width: "15px",
              height: "15px",
            },
            ["@media (min-width:1280px)"]: {
              // eslint-disable-line no-useless-computed-key
              width: "17px",
              height: "17px",
            },
          },
        },
        spacer: {
          width: "8px",
        },
        button: {
          color: "#8065C9",
        },
      },
    },
    MuiDayPicker: {
      styleOverrides: {
        root: {
          minHeight: "0",
        },
        header: {
          justifyContent: "space-between",
        },
        weekDayLabel: {
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "10px",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "12px",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "14px",
          },
          color: "#8065C9",
          fontSize: "13px",
        },
        weekContainer: {
          marginBottom: "0.5rem",
          justifyContent: "space-between",
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: "100%",
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            paddingRight: "1rem",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            paddingRight: "1rem",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key
            paddingRight: "1rem",
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          ["@media (min-width:768px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "9px",
            width: "28px",
            height: "28px",
          },
          ["@media (min-width:1024px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "11px",
            width: "32px",
            height: "32px",
          },
          ["@media (min-width:1280px)"]: {
            // eslint-disable-line no-useless-computed-key
            fontSize: "14px",
            width: "36px",
            height: "36px",
          },

          color: "#2D224C",
          "&:not(.Mui-selected)": {
            border: "none",
          },
          "&:not(.Mui-disabled)": {
            backgroundColor: "#a283f746",
          },
          "&:not(.Mui-disabled):hover": {
            backgroundColor: "#9e7df998",
          },
          "&.Mui-selected": {
            backgroundColor: "#8065C9",
            willChange: "backgroundColor",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#8065C9",
            willChange: "backgroundColor",
          },
          "&.Mui-selected:focus": {
            backgroundColor: "#8065C9",
            willChange: "backgroundColor",
          },
        },
        today: {
          border: "none",
          "&::before": {
            borderRadius: "100%",
            position: "absolute",
            backgroundColor: "#2D224C",
            height: "5px",
            width: "5px",
            left: "50%",
            bottom: "10%",
            content: '""',
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
});
