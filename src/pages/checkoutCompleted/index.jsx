import { Button, Center, Container, Flex, Link, Stack, Text } from "@chakra-ui/react";
import DefaultLayout from "../../layout/DefaultLayout";

const ThankYouPage = () => {
    return (
        <DefaultLayout>
            <Center w={`100%`} h={`50vh`} bgColor={`accentYellow.500`}>
                <Stack as={Container} maxW={`1333.5px`} bgColor={`white`} p={10} borderRadius={8} spacing={5}>
                    <Flex justifyContent='space-between'>
                        <Text fontSize='2xl' fontWeight='bold' color='blue.500'>
                            Thank You For Your Order!
                        </Text>
                        <Button variant={`link`} as={Link} color={`primary.500`} fontWeight={500}>
                            Print Receipt
                        </Button>
                    </Flex>
                    <Text>
                        Order{" "}
                        <Text as='span' fontWeight='bold'>
                            #147258369
                        </Text>{" "}
                        Has Been Placed
                    </Text>
                    <Text>
                        You Will Receive An Email Confirmation Shortly (
                        <Text as='span' fontWeight='bold'>
                            Lodosmail@gmail.com
                        </Text>
                        )
                    </Text>
                </Stack>
            </Center>
        </DefaultLayout>
    );
};

export default ThankYouPage;
