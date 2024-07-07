import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
    primary: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#3498DB",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
    },
    secondary: {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#ffe082",
        300: "#ffd54f",
        400: "#ffca28",
        500: "#2ECC71",
        600: "#ffb300",
        700: "#ffa000",
        800: "#ff8f00",
        900: "#ff6f00",
    },
    accent: {
        50: "#e0f7fa",
        100: "#b2ebf2",
        200: "#80deea",
        300: "#4dd0e1",
        400: "#26c6da",
        500: "#E74C3C",
        600: "#00acc1",
        700: "#0097a7",
        800: "#00838f",
        900: "#006064",
    },
    accentYellow: {
        500: `#FCF8F3`,
    },
    darkGrey: {
        500: `#2C3E50`,
    },
};

const customTheme = extendTheme({
    colors,
    styles: {
        global: (props) => ({
            body: {
                bg: mode("gray.50", "gray.900")(props),
                color: mode("gray.800", "whiteAlpha.900")(props),
                fontFamily: "Montserrat, sans-serif",
            },
        }),
    },
    components: {
        Heading: {
            baseStyle: {
                fontWeight: "bold",
                color: "darkGrey.500",
                fontFamily: "Montserrat, sans-serif",
            },
            sizes: {
                xl: {
                    fontSize: "6xl",
                },
                lg: {
                    fontSize: "5xl",
                },
                md: {
                    fontSize: "4xl",
                },
                sm: {
                    fontSize: "3xl",
                },
                xs: {
                    fontSize: "2xl",
                },
            },
            variants: {
                // primary: {
                //     color: "primary.500",
                // },
                // secondary: {
                //     color: "secondary.500",
                // },
                // accent: {
                //     color: "accent.500",
                // },
            },
            defaultProps: {
                size: "md",
                variant: "primary",
            },
        },
    },
});

export default customTheme;
