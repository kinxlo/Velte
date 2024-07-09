import { Box, Heading, Image, Text, VStack, Card, Flex, Center } from "@chakra-ui/react";
import SharedButton from "../components/SharedButton";
import { rem } from "../utils/fontUtils";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
    return (
        <Box>
            <Flex flexDir={{ base: `column`, xl: `row` }} gap={10} alignItems='center'>
                {/* Left Section */}
                <VStack w={`100%`} spacing={5} align='flex-start'>
                    <Heading fontWeight={800} as='h1' fontSize={{ base: rem(20), md: rem(40) }}>
                        Featured Product
                    </Heading>
                    <Text fontSize='lg' color='gray.600'>
                        Our top pick for you.
                    </Text>
                    <SharedButton
                        as={Link}
                        to={`/cart/${89}/checkout`}
                        bgColor={`primary.500`}
                        borderRadius={`none`}
                        color={`white`}
                        title={`Add To Cart`}
                        w={rem(176)}
                    />
                </VStack>

                {/* Right Section */}
                <Flex flexDir={{ base: `column`, md: `row` }} w={`100%`} gap={5} justifyContent={`space-between`}>
                    <Card bgColor={`accentYellow.500`} w={{ md: rem(404) }} borderRadius={rem(8)} boxShadow={`0px 4px 4px 0px #00000040`} overflow={`hidden`}>
                        <Box pos={`absolute`} top={4} right={4} display='flex' alignItems='baseline'>
                            <Center w={rem(50)} p={5} h={rem(50)} color={`white`} borderRadius='full' bgColor={`accent.500`}>
                                <Text fontSize={{ md: `sm` }}>-50%</Text>
                            </Center>
                        </Box>
                        <Image
                            objectFit={`cover`}
                            w={`100%`}
                            h={`100%`}
                            src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/ukeqmlk40frjxhgopfje.png' // Replace with actual image URL
                            alt='Velte Ayurvedic Hair Butter'
                        />
                        <Flex
                            bgColor={`accentYellow.500`}
                            justifyContent={`space-around`}
                            p={4}
                            w={`100%`}
                            pos={`absolute`}
                            bottom={10}
                            left={0}
                            display='flex'
                            alignItems='baseline'
                        >
                            <Text fontWeight={700}>N 10,000.00</Text>
                            <Text color={`#4F4F4F`}>N 20,000.00</Text>
                        </Flex>
                    </Card>
                    <Box w={{ md: rem(404) }} borderRadius={rem(8)} overflow='hidden' p={5} bg='white'>
                        <Heading as={`h3`} mt={2} fontSize={`2xl`} color={`primary.500`}>
                            Velte Ayurvedic Hair Butter
                        </Heading>
                        <Text mt={2} color={`primary.500`} fontWeight={700}>
                            Natural Ingredients, Powerful Results
                        </Text>
                        <Text mt={2} fontSize='sm' color='gray.600'>
                            Introducing our Ayurvedic Hair Butter, a luxurious blend designed to transform your hair care routine with the ancient wisdom of
                            Ayurveda. Crafted with a unique combination of natural ingredients, this hair butter promises to provide deep conditioning,
                            strength, and luster to your hair.
                        </Text>
                        <Box mt={4}>
                            <Text fontSize='md' fontWeight='bold' color={`primary.500`}>
                                Key Ingredients
                            </Text>
                            <Text fontSize='sm' color='gray.600'>
                                - Shea Butter
                                <br />
                                - Fenugreek Seed
                                <br />
                                - Rosemary Leaves
                                <br />
                                - Clove Flower Bud
                                <br />
                                - Olive Oil
                                <br />
                                - Coconut Oil
                                <br />
                                - Avocado Oil
                                <br />
                                - Tea Tree Essential Oil
                                <br />- Peppermint Essential Oil
                            </Text>
                        </Box>
                        <Text mt={5} color={`primary.500`} fontWeight={700}>
                            FOR ALL HAIR TYPES
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default FeaturedProduct;
