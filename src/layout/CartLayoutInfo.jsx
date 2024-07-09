import { Box, Button, Checkbox, Container, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import OrderSummary from "../components/orderSummary";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const CartLayoutInfo = () => {
    return (
        <Box bgColor={`accentYellow.500`}>
            <Flex as={Container} maxW='1333.5px' flexDir={{ base: `column`, xl: `row` }} gap={10} py={4}>
                <Stack bgColor={`white`} gap={5} w={{ xl: `70%` }} p={{ base: 5, lg: 10 }}>
                    <Heading fontWeight={700} fontSize={`md`}>
                        Contact Info
                    </Heading>
                    <FormControl>
                        <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='email' placeholder={`Email`} />
                    </FormControl>
                    <Checkbox color={`gray.300`}> Email Me With News And Offers </Checkbox>

                    <Box>
                        <FormLabel>Delivery method</FormLabel>
                        <RadioGroup defaultValue='ship' color={`primary.500`}>
                            <Stack direction='row' spacing={5}>
                                <Radio value='ship'>Ship</Radio>
                                <Radio value='pickup'>Pick up</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>

                    <Heading fontWeight={700} fontSize={`md`} mt={5}>
                        Shipping address
                    </Heading>

                    <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                        <GridItem>
                            <FormControl>
                                <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='text' placeholder={`Full Name`} />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='text' placeholder={`Last Name`} />
                            </FormControl>
                        </GridItem>
                    </Grid>

                    <FormControl>
                        <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='text' placeholder={`Country / Region`} />
                    </FormControl>

                    <FormControl>
                        <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='text' placeholder={`Address`} />
                    </FormControl>

                    <FormControl>
                        <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='text' placeholder={`Apartment, suite, etc.`} />
                    </FormControl>

                    <Grid templateColumns='repeat(3, 1fr)' gap={5}>
                        <GridItem>
                            <FormControl>
                                <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='text' placeholder={`City`} />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='text' placeholder={`Province`} />
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='text' placeholder={`Postal Code`} />
                            </FormControl>
                        </GridItem>
                    </Grid>

                    <FormControl>
                        <Input _placeholder={{ fontSize: `sm` }} size={`lg`} type='text' placeholder={`Phone`} />
                    </FormControl>

                    <Checkbox color={`gray.300`}>Save this information for next time</Checkbox>

                    <Flex justifyContent='space-between' alignItems={`center`} mt={5} flexDir={{ base: `column-reverse`, lg: `row` }} gap={5}>
                        <Link to={`/cart/${89}/checkout`}>
                            <Button variant='link' colorScheme='blue'>
                                <Icon icon='material-symbols:chevron-left' /> Back To Cart
                            </Button>
                        </Link>
                        <Link to={`/cart/${89}/payment`}>
                            <Button colorScheme='blue'>Continue to shipping</Button>
                        </Link>
                    </Flex>
                </Stack>
                <Stack w={{ xl: `30%` }}>
                    <OrderSummary />
                </Stack>
            </Flex>
        </Box>
    );
};
export default CartLayoutInfo;
