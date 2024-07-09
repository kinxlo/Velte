import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import customTheme from "./style/customTheme";
// import ColorModeSwitcher from "./components/ThemeSwitcher";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ScrollToTop from "./components/ScrollToTop";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <ChakraProvider theme={customTheme}>
                    <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
                    <ScrollToTop />
                    <App />
                    {/* <ColorModeSwitcher /> */}
                </ChakraProvider>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);
