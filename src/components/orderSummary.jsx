import { Box, Button, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";
import visa from "../assets/visa-logo.png";
import mastercard from "../assets/Mastercard.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const OrderSummary = () => {
    return (
        <Box>
            <Stack p={10} borderRadius='md' bgColor={`white`}>
                <Text fontWeight={700} mb='4' textAlign='center'>
                    Order Summary
                </Text>
                <Divider />
                <Stack spacing={5} p={5}>
                    <Flex fontWeight={700} justify='space-between'>
                        <Text>Items Total (2)</Text>
                        <Text>₦10,000.00</Text>
                    </Flex>
                    <Flex justify='space-between'>
                        <Text>Discounts</Text>
                        <Text>-₦00.00</Text>
                    </Flex>
                    <Flex fontWeight={600} justify='space-between'>
                        <Text>Subtotal</Text>
                        <Text>₦10,000.00</Text>
                    </Flex>
                    <Flex fontWeight={600} justify='space-between'>
                        <Text>Shipping</Text>
                        <Text>₦1,000.00</Text>
                    </Flex>
                    <Flex justify='space-between'>
                        <Text>Duties & Taxes</Text>
                        <Text>₦100.00</Text>
                    </Flex>
                    <Divider />
                    <Flex justify='space-between' fontWeight='bold'>
                        <Text>Total</Text>
                        <Text>₦11,100.00</Text>
                    </Flex>
                    <Button as={Link} to={`/cart/${89}/payment`} bgColor={`primary.500`} color={`white`} mt='4' w='full'>
                        Proceed To Checkout
                    </Button>
                </Stack>
            </Stack>

            <Box mt='6' p='4' bg='white' borderRadius='md'>
                <Text fontWeight={700} mb='4' textAlign='center'>
                    Payment Methods
                </Text>
                <Flex alignItems={`center`} justifyContent={`center`} mb={4}>
                    <Box mx='2'>
                        <Image src={visa} alt={`visa`} />
                    </Box>
                    <Box mx='2'>
                        <Image src={mastercard} alt={`mastercard`} />
                    </Box>
                </Flex>
            </Box>
            <Box mt='6' p='4' bg='white' borderRadius='md'>
                <Flex alignItems={`center`}>
                    <Box as='span' mr='2' color='green.500' fontSize={`3xl`}>
                        <Icon icon='octicon:shield-check-16' />
                    </Box>
                    <Text fontWeight='bold' color='green.500'>
                        Buyer Protection
                    </Text>
                </Flex>
                <Text fontSize={`sm`} mt={4}>
                    Get full refund if the item is not as described or if it is not delivered.
                </Text>
            </Box>
        </Box>
    );
};

export default OrderSummary;
