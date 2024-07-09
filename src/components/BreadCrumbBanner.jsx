import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const BreadCrumbBanner = () => {
    return (
        <Box p={5} bgColor={`accentYellow.500`} fontWeight={600}>
            <Container maxW={`1333.5`}>
                <Flex fontSize={{ base: `sm`, md: `initial` }}>
                    <Breadcrumb spacing='8px' separator={<Icon icon='material-symbols:chevron-right' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to={`checkout`}>
                                Cart
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to={`information`}>
                                Information
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to={`payment`}>
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
