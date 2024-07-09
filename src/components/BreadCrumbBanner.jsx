import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbBanner = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname.includes(path);

    return (
        <Box p={5} bgColor={`accentYellow.500`} fontWeight={600}>
            <Container maxW={`1333.5`}>
                <Flex fontSize={{ base: `sm`, md: `initial` }}>
                    <Breadcrumb spacing='8px' separator={<Icon icon='material-symbols:chevron-right' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to={`checkout`} color={isActive("checkout") ? "primary.500" : "initial"}>
                                Cart
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to={`information`} color={isActive("information") ? "primary.500" : "initial"}>
                                Information
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to={`payment`} color={isActive("payment") ? "primary.500" : "initial"}>
                                Payment and Shipping
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
            </Container>
        </Box>
    );
};
export default BreadCrumbBanner;
