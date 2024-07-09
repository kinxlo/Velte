import { Box, Button, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";
import visa from "../assets/visa-logo.png";
import mastercard from "../assets/Mastercard.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";

const OrderSummary = () => {
    const { state } = useLocation();

    // Calculate prices
    const quantity = state?.quantity || 0;
    const originalPrice = state?.originalPrice || 0;
    const discountPercentage = state?.discountPercentage || 0;
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const subtotal = originalPrice * quantity;
    const shipping = 1000;
    const dutiesAndTaxes = 100;
    const total = subtotal - discountAmount + shipping + dutiesAndTaxes;

    return (
        <Box>
            <Stack p={10} borderRadius='md' bgColor='white'>
                <Text fontWeight={700} mb='4' textAlign='center'>
                    Order Summary
                </Text>
                <Divider />
                <Stack spacing={5} p={5}>
                    <Flex fontWeight={700} justify='space-between'>
                        <Text>Items Total ({quantity})</Text>
                        <Text>N{originalPrice}</Text>
                    </Flex>
                    <Flex justify='space-between'>
                        <Text>Discounts</Text>
                        <Text>-{discountPercentage}%</Text>
                    </Flex>
                    <Flex fontWeight={600} justify='space-between'>
                        <Text>Subtotal</Text>
                        <Text>N{subtotal.toFixed(2)}</Text>
                    </Flex>
                    <Flex fontWeight={600} justify='space-between'>
                        <Text>Shipping</Text>
                        <Text>N{shipping.toFixed(2)}</Text>
                    </Flex>
                    <Flex justify='space-between'>
                        <Text>Duties & Taxes</Text>
                        <Text>N{dutiesAndTaxes.toFixed(2)}</Text>
                    </Flex>
                    <Divider />
                    <Flex justify='space-between' fontWeight='bold'>
                        <Text>Total</Text>
                        <Text>N{total.toFixed(2)}</Text>
                    </Flex>
                    <Button as={Link} to={`/checkout`} bgColor='primary.500' color='white' mt='4' w='full'>
                        Proceed To Checkout
                    </Button>
                </Stack>
            </Stack>

            <Box mt='6' p='4' bg='white' borderRadius='md'>
                <Text fontWeight={700} mb='4' textAlign='center'>
                    Payment Methods
                </Text>
                <Flex alignItems='center' justifyContent='center' mb={4}>
                    <Box mx='2'>
                        <Image src={visa} alt='visa' />
                    </Box>
                    <Box mx='2'>
                        <Image src={mastercard} alt='mastercard' />
                    </Box>
                </Flex>
            </Box>
            <Box mt='6' p='4' bg='white' borderRadius='md'>
                <Flex alignItems='center'>
                    <Box as='span' mr='2' color='green.500' fontSize='3xl'>
                        <Icon icon='octicon:shield-check-16' />
                    </Box>
                    <Text fontWeight='bold' color='green.500'>
                        Buyer Protection
                    </Text>
                </Flex>
                <Text fontSize='sm' mt={4}>
                    Get full refund if the item is not as described or if it is not delivered.
                </Text>
            </Box>
        </Box>
    );
};

export default OrderSummary;
