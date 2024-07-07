/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Box>
                <Navbar />
            </Box>
            {children}
            <Box>
                <Footer />
            </Box>
        </>
    );
};

export default DefaultLayout;
