import { Box, Flex, HStack, useDisclosure, Stack, Center, Text, Container, Image } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Velte-logo.png";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <Box bg='blue.500'>
            <Container maxW={`1333.5`}>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Center color={`white`} fontSize={`2.5rem`} display={{ lg: "none" }} onClick={isOpen ? onClose : onOpen}>
                        <Icon icon='material-symbols:menu' />
                    </Center>

                    <HStack spacing={8} alignItems='center'>
                        <Flex as={Link} to={`/`} alignItems={`center`} flexDir={{ base: `column-reverse`, md: `row` }}>
                            <Image src={logo} alt='Velte Beauty' h={{ base: `40px`, md: `initial` }} />
                            <Text as={`h2`} fontWeight={700} color={`white`} fontSize={{ base: `sm`, md: `2xl` }}>
                                Velte Beauty
                            </Text>
                        </Flex>
                    </HStack>
                    <HStack gap={16} as='nav' spacing={4} display={{ base: "none", lg: "flex" }} color='white'>
                        <Link to='/' style={{ fontWeight: isActive("/") ? "bold" : "normal" }}>
                            Home
                        </Link>
                        <Link to='/shop' style={{ fontWeight: isActive("/shop") ? "bold" : "normal" }}>
                            Shop
                        </Link>
                        {/* <Link to='/about' style={{ fontWeight: isActive('/about') ? 'bold' : 'normal' }}>About</Link>
                        <Link to='/contact' style={{ fontWeight: isActive('/contact') ? 'bold' : 'normal' }}>Contact</Link> */}
                    </HStack>
                    <HStack gap={10} fontSize={`28px`} alignItems='center' color='white'>
                        {/* <Icon icon='mdi:account-alert-outline' />
                        <Icon icon='akar-icons:search' />
                        <Icon icon='akar-icons:heart' /> */}
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
                            <Icon icon='ant-design:shopping-cart-outlined' />
                        </Link>
                        {/* <IconButton size='lg' variant='ghost' aria-label='Search' icon={<Icon icon={searchIcon} />} />
                        <IconButton size='lg' variant='ghost' aria-label='Favorites' icon={<Icon icon={heartIcon} />} />
                        <IconButton size='lg' variant='ghost' aria-label='Cart' icon={<Icon icon={shoppingBag} />} /> */}
                    </HStack>
                </Flex>
            </Container>

            {isOpen ? (
                <Container pb={4} display={{ lg: "none" }}>
                    <Stack as='nav' spacing={4} color='white'>
                        <Link to='/' style={{ fontWeight: isActive("/") ? "bold" : "normal" }}>
                            Home
                        </Link>
                        <Link to='/shop' style={{ fontWeight: isActive("/shop") ? "bold" : "normal" }}>
                            Shop
                        </Link>
                        {/* <Link to='/about' style={{ fontWeight: isActive('/about') ? 'bold' : 'normal' }}>About</Link>
                        <Link to='/contact' style={{ fontWeight: isActive('/contact') ? 'bold' : 'normal' }}>Contact</Link> */}
                    </Stack>
                </Container>
            ) : null}
        </Box>
    );
};

export default Navbar;
