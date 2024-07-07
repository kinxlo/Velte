// In one of your components

import { useColorMode, Button } from "@chakra-ui/react";

function ColorModeSwitcher() {
    const { colorMode, toggleColorMode } = useColorMode();
    return <Button onClick={toggleColorMode}>{colorMode === "light" ? "Dark" : "Light"} Mode</Button>;
}

export default ColorModeSwitcher;
