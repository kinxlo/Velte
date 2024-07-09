import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    Flex,
    FormControl,
    Grid,
    GridItem,
    Heading,
    Image,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Text,
} from "@chakra-ui/react";
import OrderSummary from "../components/orderSummary";
import { Link } from "react-router-dom";
import visa from "../assets/visa-logo.png";
import mastercard from "../assets/Mastercard.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const CartLayoutPayment = () => {
    return (
        <Box bgColor={`accentYellow.500`}>
            <Flex as={Container} maxW='1333.5px' flexDir={{ base: `column`, xl: `row` }} gap={10} py={4}>
                <Stack gap={5} w={{ xl: `70%` }}>
                    <Stack p={{ base: 5, lg: 10 }} bgColor={`white`} spacing={5}>
                        <Stack borderRadius={4} border={`1px solid #D9D9D9`} p={4} gap={6}>
                            <Flex flexDir={{ base: `column`, lg: `row` }} alignItems={{ lg: `center` }}>
                                <Heading fontSize={`md`} w={{ lg: `10%` }} fontWeight='bold'>
                                    Contact
                                </Heading>
                                <Input border={`none`} w={{ lg: `90%` }} placeholder={`phone`} />
                            </Flex>
                            <Divider />
                            <Flex flexDir={{ base: `column`, lg: `row` }} alignItems={{ lg: `center` }}>
                                <Heading fontSize={`md`} w={{ lg: `10%` }} fontWeight='bold'>
                                    Ship to
                                </Heading>
                                <Input border={`none`} w={{ lg: `90%` }} placeholder={`Address`} />
                            </Flex>
                        </Stack>
                        <Box mt={10}>
                            <Heading fontSize={`md`} fontWeight='bold' mb={5}>
                                Shipping method
                            </Heading>
                            <RadioGroup defaultValue='regular' color={`#828282`}>
                                <Stack borderRadius={4} border={`1px solid #D9D9D9`} p={4} gap={6} spacing={5}>
                                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                                        <Radio size={`lg`} value='free'>
                                            <Text fontSize={`sm`}>Free Shipping</Text>
                                        </Radio>
                                        <Text fontSize={`sm`}>Free</Text>
                                    </Box>
                                    <Divider />
                                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                                        <Radio size={`lg`} value='regular'>
                                            <Text fontSize={`sm`}>Regular Shipping (7 days)</Text>
                                        </Radio>
                                        <Text fontSize={`sm`}>₦1,000.00</Text>
                                    </Box>
                                    <Divider />
                                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                                        <Radio size={`lg`} value='express'>
                                            <Text fontSize={`sm`}>Express Shipping (3 days)</Text>
                                        </Radio>
                                        <Text fontSize={`sm`}>₦3,000.00</Text>
                                    </Box>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Stack>
                    <Stack p={{ base: 5, lg: 10 }} bgColor={`white`}>
                        <Stack borderRadius={4} border={`1px solid #D9D9D9`} p={4} gap={2}>
                            <Flex flexDir={{ base: `column`, lg: `row` }} alignItems={{ lg: `center` }}>
                                <Heading fontSize={`md`} w={{ lg: `10%` }} fontWeight='bold'>
                                    Contact
                                </Heading>
                                <Input border={`none`} w={{ lg: `90%` }} placeholder={`08100792853`} />
                            </Flex>
                            <Divider />
                            <Flex flexDir={{ base: `column`, lg: `row` }} alignItems={{ lg: `center` }}>
                                <Heading fontSize={`md`} w={{ lg: `10%` }} fontWeight='bold'>
                                    Ship to
                                </Heading>
                                <Input border={`none`} w={{ lg: `90%` }} placeholder={`123, Bitmap street, College Road`} />
                            </Flex>
                            <Divider />
                            <Flex flexDir={{ base: `column`, lg: `row` }} alignItems={{ lg: `center` }}>
                                <Heading fontSize={`md`} w={{ lg: `10%` }} fontWeight='bold'>
                                    Method
                                </Heading>
                                <Input border={`none`} w={{ lg: `90%` }} placeholder={`Regular Shipping`} />
                            </Flex>
                        </Stack>
                    </Stack>
                    <Stack p={{ base: 5, lg: 10 }} bgColor={`white`}>
                        <Box>
                            <Heading fontSize={`md`} fontWeight={700} mb={2}>
                                Payment
                            </Heading>
                            <Text my={5} textAlign={`end`} color={`primary.500`} fontWeight={600}>
                                Add a new Card
                            </Text>
                            <Flex gap={4} alignItems='center' mt={2}>
                                <Box>
                                    <Image src={visa} alt={`visa`} />
                                </Box>
                                <Box>
                                    <Image src={mastercard} alt={`mastercard`} />
                                </Box>
                            </Flex>
                        </Box>
                        <Stack fontSize={{ base: `xs`, md: `sm` }} spacing={5} mt={5}>
                            <FormControl>
                                <Input type='text' placeholder={`Card Number`} _placeholder={{ fontSize: `sm` }} size={`lg`} />
                            </FormControl>
                            <FormControl>
                                <Input type='text' placeholder={`Cardholder Name`} _placeholder={{ fontSize: `sm` }} size={`lg`} />
                            </FormControl>
                            <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                                <GridItem>
                                    <FormControl>
                                        <Input type='text' placeholder={`Expiration Date(MM / yY)`} _placeholder={{ fontSize: `sm` }} />
                                    </FormControl>
                                </GridItem>
                                <GridItem>
                                    <FormControl>
                                        <Input type='text' placeholder={`Security  Code`} _placeholder={{ fontSize: `sm` }} />
                                    </FormControl>
                                </GridItem>
                            </Grid>
                            <Checkbox>
                                <Text fontSize={`sm`}>Save This Information For Next Time</Text>
                            </Checkbox>
                            <Text fontSize={`md`} fontWeight={700} color={`#4F4F4F`}>
                                <Icon icon='material-symbols:chevron-left' /> Your order will be processed in Naira(N)
                            </Text>
                            <Flex justifyContent='space-between' alignItems={`center`} mt={5} flexDir={{ base: `column-reverse`, lg: `row` }} gap={5}>
                                <Link to={`/cart/${89}/information`}>
                                    <Button variant='link' colorScheme='blue'>
                                        <Icon icon='material-symbols:chevron-left' /> Return To Information
                                    </Button>
                                </Link>
                                <Link to={`/checkout`}>
                                    <Button px={32} bgColor={`primary.500`} color={`white`}>
                                        Pay Now
                                    </Button>
                                </Link>
                            </Flex>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack w={{ xl: `30%` }}>
                    <OrderSummary />
                </Stack>
            </Flex>
        </Box>
    );
};
export default CartLayoutPayment;
