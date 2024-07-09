import { useState } from "react";
import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    SimpleGrid,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    VStack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import OrderSummary from "../components/orderSummary";
import { productList } from "../utils/products";
import ProductCard from "../components/cards/ProductCard";
import SharedButton from "../components/SharedButton";
import { Link, useLocation } from "react-router-dom";

const CartLayout = () => {
    const { state } = useLocation();

    const [cartItems, setCartItems] = useState([
        {
            title: state?.title,
            category: state?.category,
            isInStock: state?.isInStock,
            imageUrl: state?.imageUrl,
            quantity: state?.quantity,
            price: state?.discountedPrice || state?.originalPrice,
        },
    ]);

    const handleQuantityChange = (index, value) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity = value;
        setCartItems(newCartItems);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <Box bgColor={`accentYellow.500`}>
            <Flex as={Container} maxW='1333.5px' flexDir={{ base: `column`, xl: `row` }} gap={10} py={4}>
                <Stack gap={5} w={{ xl: `70%` }}>
                    <Stack gap={5} bgColor={`white`} p={5}>
                        <Heading color={`primary.500`} as={`h3`}>
                            Shopping Cart
                        </Heading>
                        <Text>Deselect all items</Text>
                    </Stack>
                    <Stack gap={5} bgColor={`white`} p={5}>
                        <Flex color={`primary.500`} alignItems={`center`} gap={5}>
                            <Text color={`darkGrey.500`} as={`span`}>
                                Cart({cartItems.length})
                            </Text>
                            <Icon icon='ion:chevron-forward-sharp' />
                        </Flex>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Product</Th>
                                        <Th>Quantity</Th>
                                        <Th>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {cartItems.map((item, index) => (
                                        <Tr key={index}>
                                            <Td as={Flex} gap={2}>
                                                <Box borderRadius={5} overflow={`hidden`} boxSize={`10rem`}>
                                                    <Image objectFit={`cover`} w={`100%`} h={`100%`} src={item.imageUrl} alt={`pic`} />
                                                </Box>
                                                <Stack gap={10}>
                                                    <Stack>
                                                        <Text>{item.title}</Text>
                                                        <Text color={`#D9D9D9`}>{item.category}</Text>
                                                        <Text color={item.isInStock ? `lightgreen` : `red.400`} fontWeight={600}>
                                                            {item.isInStock ? `In stock` : `Out of stock`}
                                                        </Text>
                                                    </Stack>
                                                    <Flex fontSize={`xs`} color={`primary.500`} gap={2} fontWeight={600}>
                                                        <Text as={`span`}>Save for later</Text>
                                                        <Text as={`span`}>|</Text>
                                                        <Text as={`span`}>Remove</Text>
                                                    </Flex>
                                                </Stack>
                                            </Td>
                                            <Td>
                                                <Box w={`fit-content`} h={`10rem`} justifyContent={`flex-start`} alignItems={`flex-start`}>
                                                    <NumberInput
                                                        value={item.quantity}
                                                        min={1}
                                                        max={50}
                                                        fontWeight={700}
                                                        w={`7rem`}
                                                        onChange={(value) => handleQuantityChange(index, parseInt(value))}
                                                    >
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </Box>
                                            </Td>
                                            <Td>
                                                <Box h={`10rem`} justifyContent={`flex-start`} alignItems={`flex-start`}>
                                                    <Text fontSize={`xl`} fontWeight={700}>
                                                        N {item.price}
                                                    </Text>
                                                </Box>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th></Th>
                                        <Th>
                                            <Text>Subtotal ({cartItems.length} items)</Text>
                                        </Th>
                                        <Th>
                                            <Text fontSize={`xl`} fontWeight={700}>
                                                N {calculateSubtotal()}
                                            </Text>
                                        </Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </Stack>
                </Stack>

                <Stack w={{ xl: `30%` }}>
                    <OrderSummary />
                </Stack>
            </Flex>
            <Container maxW={`1333.5`} as={VStack} my={20}>
                <Box mb={10}>
                    <Heading fontSize={{ base: 20, lg: 36 }} as={`h1`}>
                        Recommended Products
                    </Heading>
                </Box>
                <SimpleGrid w={`100%`} columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
                    {productList?.slice(10, 14).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </SimpleGrid>
                <Box my={5}>
                    <SharedButton as={Link} to={`/shop`} title={`Show More`} border={`1px solid lightBlue`} bg={`transparent`} color={`primary.500`} px={10} />
                </Box>
            </Container>
        </Box>
    );
};

export default CartLayout;
