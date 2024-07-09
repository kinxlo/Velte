import { Box, Container, Stack, Text, VStack, Divider, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Box bgColor={`darkGrey.500`} color={`white`} py={10}>
            <Container maxW={`1333.5`}>
                <Grid templateColumns='repeat(12, 1fr)' gap={5}>
                    <GridItem colSpan={{ base: 12, md: 4 }}>
                        <VStack align='flex-start' spacing={3}>
                            <Text fontWeight='bold' fontSize='lg'>
                                Velte Beauty
                            </Text>
                            <Text>Unity Quarters, Orita Obele Estate, Road Block, Akure, Ondo State</Text>
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 2 }}>
                        <VStack align='flex-start' spacing={10}>
                            <Text fontWeight='bold' fontSize='lg'>
                                Links
                            </Text>
                            <Link to='/'>Home</Link>
                            <Link to='/shop'>Shop</Link>
                            {/* <Link href='#'>About</Link>
                            <Link href='#'>Contact</Link> */}
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 2 }}>
                        <VStack align='flex-start' spacing={10}>
                            <Text fontWeight='bold' fontSize='lg'>
                                Help
                            </Text>
                            <Link to='/payment-option'>Payment Options</Link>
                            <Link to='/return'>Returns</Link>
                            <Link to='/privacy-policies'>Privacy Policies</Link>
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 4 }}>
                        <VStack align='flex-start' spacing={3}>
                            <Text fontWeight='bold' fontSize='lg'>
                                Newsletter
                            </Text>
                            <Text>Enter Your Email Address</Text>
                        </VStack>
                    </GridItem>
                </Grid>

                <Divider my={10} />

                <Stack direction={{ base: "column", md: "row" }} justify='space-between' align='center'>
                    <Text>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
