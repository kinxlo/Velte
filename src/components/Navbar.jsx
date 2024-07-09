import { Box, Flex, HStack, useDisclosure, Stack, Center, Text, Container } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import logo from "../assets/Velte-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg='blue.500'>
            <Container maxW={`1333.5`}>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Center color={`white`} fontSize={`2.5rem`} display={{ lg: "none" }} onClick={isOpen ? onClose : onOpen}>
                        <Icon icon='material-symbols:menu' />
                    </Center>

                    <HStack spacing={8} alignItems='center'>
                        <Flex alignItems={`center`}>
                            <img src={logo} alt='Velte Beauty' height='40px' />
                            <Text as={`h2`} lineHeight={`36.57px`} fontWeight={700} color={`white`} fontSize={{ base: `sm`, md: `2xl` }}>
                                Velte Beauty
                            </Text>
                        </Flex>
                    </HStack>
                    <HStack gap={16} as='nav' spacing={4} display={{ base: "none", lg: "flex" }} color='white'>
                        <Link to='/'>Home</Link>
                        <Link to='/shop'>Shop</Link>
                        {/* <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link> */}
                    </HStack>
                    <HStack display={{ base: `none`, md: `flex` }} gap={10} fontSize={`28px`} alignItems='center' color='white'>
                        {/* <Icon icon='mdi:account-alert-outline' />
                        <Icon icon='akar-icons:search' />
                        <Icon icon='akar-icons:heart' /> */}
                        <Link to={`/cart/${89}/checkout`}>
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
                        <Link href='/'>Home</Link>
                        <Link href='/shop'>Shop</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/contact'>Contact</Link>
                    </Stack>
                </Container>
            ) : null}
        </Box>
    );
};

export default Navbar;
