import { Box, Container, Stack, Text, VStack, Divider, Grid, GridItem, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/Velte-logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { rem } from "../utils/fontUtils";

const Footer = () => {
    return (
        <Box bgColor={`darkGrey.500`} color={`white`} py={10}>
            <Container maxW={`1333.5`}>
                <Grid templateColumns='repeat(12, 1fr)' gap={5}>
                    <GridItem colSpan={{ base: 12, lg: 5 }}>
                        <Flex alignItems={`center`}>
                            <Image src={logo} alt='Velte Beauty' h={{ base: `40px`, md: `initial` }} />
                            <Text fontWeight='bold' fontSize='lg'>
                                Velte Beauty
                            </Text>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, lg: 4 }}>
                        <Stack w={`100%`} align='flex-start' spacing={6}>
                            <Text fontWeight='bold' fontSize='lg'>
                                Links
                            </Text>
                            <Link to='/'>Home</Link>
                            <Link to='/shop'>Shop</Link>
                            <Link
                                to={`/cart/${89}/checkout`}
                                state={{
                                    title: "Face Toner",
                                    category: "Face & Lip Care",
                                    originalPrice: 2300.0,
                                    discountedPrice: 1725.0,
                                    imageUrl: "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720545798/HNG/o0q0etfythu7oaudyf5j.jpg",
                                    imageAlt: "Face Toner",
                                    new: false,
                                    description: "Balances skin's pH and tightens pores.",
                                    quantity: Math.floor(Math.random() * 51),
                                    discountPercentage: (((2300 - 1725) / 2300) * 100).toFixed(0),
                                    isInStock: Math.random() >= 0.5,
                                }}
                            >
                                Cart
                            </Link>
                            {/* <Link href='#'>About</Link>
                            <Link href='#'>Contact</Link> */}
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, lg: 3 }}>
                        <Stack w={`100%`} align='flex-start' spacing={6}>
                            <Text fontWeight='bold' fontSize='lg'>
                                Contact
                            </Text>
                            <Flex alignItems={`center`} gap={3}>
                                <Icon fontSize={rem(20)} icon='teenyicons:phone-outline' />
                                <Text as={`span`}>09012345678</Text>
                            </Flex>
                            <Flex alignItems={`center`} gap={3}>
                                <Icon fontSize={rem(20)} icon='charm:mail' />
                                <Text as={`span`}>veltebeauty@gmail.com</Text>
                            </Flex>
                            <Flex alignItems={`center`} gap={3}>
                                <Box fontSize={{ base: rem(25), md: rem(40) }}>
                                    <Icon icon='ph:map-pin' />
                                </Box>
                                <Text as={`span`}>Unity Quarters, Orita Obele Estate, Road Block, Akure, Ondo State</Text>
                            </Flex>
                        </Stack>
                    </GridItem>
                </Grid>

                <Box my={16}>
                    <Flex fontSize={`2xl`} justifyContent={`center`} alignItems={`center`} gap={5} mb={5}>
                        <Icon icon='ic:baseline-facebook' />
                        <Icon icon='mdi:instagram' />
                        <Icon icon='mdi:linkedin' />
                        <Icon icon='mdi:gmail' />
                        <Icon icon='ic:baseline-tiktok' />
                    </Flex>
                    <Divider />
                </Box>

                <Stack direction={{ base: "column", md: "row" }} justify='space-between' align='center'>
                    <Text>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
