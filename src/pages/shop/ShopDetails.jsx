import { Badge, Box, Container, Divider, Flex, Heading, HStack, Image,  Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import BreadCrumbBanner from "../../components/BreadCrumbBanner";
import DefaultLayout from "../../layout/DefaultLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { rem } from "../../utils/fontUtils";
import StarRatings from "react-star-ratings";
import { useState } from "react";
import SharedButton from "../../components/SharedButton";

const ShopDetails = () => {
    const [size, setSize] = useState("1Litre");
    const [count, setCount] = useState(1);
    return (
        <DefaultLayout>
            <BreadCrumbBanner />
            <Container maxW={`1333.5`}>
                <Flex flexDir={{ base: `column`, lg: `row` }} gap={{ base: 10, xl: 32 }}>
                    {/* Image Section */}
                    <Flex flexDir={{ base: `column`, lg: `row` }} gap={4}>
                        <VStack
                            flexDir={{ base: `row`, lg: `column` }}
                            align='flex-start'
                            justifyContent={{ base: `space-between`, md: `initial` }}
                            spacing={4}
                        >
                            <Box w={{ lg: rem(76) }} h={{ lg: rem(80) }}>
                                <Image
                                    w={`100%`}
                                    h={`100%`}
                                    borderRadius={8}
                                    src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png'
                                    alt='Thumbnail'
                                />
                            </Box>
                            <Box w={{ lg: rem(76) }} h={{ lg: rem(80) }}>
                                <Image
                                    w={`100%`}
                                    h={`100%`}
                                    borderRadius={8}
                                    src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png'
                                    alt='Thumbnail'
                                />
                            </Box>
                            <Box w={{ lg: rem(76) }} h={{ lg: rem(80) }}>
                                <Image
                                    w={`100%`}
                                    h={`100%`}
                                    borderRadius={8}
                                    src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png'
                                    alt='Thumbnail'
                                />
                            </Box>
                            <Box w={{ lg: rem(76) }} h={{ lg: rem(80) }}>
                                <Image
                                    w={`100%`}
                                    h={`100%`}
                                    borderRadius={8}
                                    src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png'
                                    alt='Thumbnail'
                                />
                            </Box>
                        </VStack>
                        <Box w={{ md: rem(323), xl: rem(423) }}>
                            <Image
                                w={`100%`}
                                borderRadius={8}
                                src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png'
                                alt='Hair Shampoo'
                            />
                        </Box>
                    </Flex>

                    {/* Details Section */}
                    <VStack align='flex-start' spacing={4}>
                        <Heading fontSize={{ base: rem(20), lg: rem(40) }} fontWeight={800}>
                            Hair Shampoo
                        </Heading>
                        <Heading fontSize={rem(24)} as={`h3`} fontWeight={700} color={`#9F9F9F`}>
                            ₦ 5,000.00
                        </Heading>
                        <HStack>
                            <StarRatings starRatedColor={`#3498DB`} rating={4} starDimension={rem(20)} starSpacing={rem(1)} />
                            <Text>|</Text>
                            <Text fontSize={`sm`} mt={1} color={`#9F9F9F`}>
                                5 Customer Review
                            </Text>
                        </HStack>
                        <Text fontSize={`sm`}>
                            Velte Hair Shampoo leaves my hair feeling incredibly soft and shiny, has a delightful fragrance, and is gentle enough for daily use,
                            making it worth every penny.
                        </Text>
                        <RadioGroup onChange={setSize} value={size}>
                            <Text ml={2} color={`#9F9F9F`} fontSize={`xs`} fontWeight={600}>
                                Size
                            </Text>
                            <HStack spacing={0}>
                                <Radio hidden value='1Litre'>
                                    <Badge
                                        borderRadius={rem(5)}
                                        fontSize={rem(7)}
                                        p={2}
                                        bgColor={size.includes(`1Litre`) ? `primary.500` : `gray.200`}
                                        color={size.includes(`1Litre`) ? `white` : `darkGrey.500`}
                                    >
                                        1Litre
                                    </Badge>
                                </Radio>
                                <Radio hidden value='500ml'>
                                    <Badge
                                        borderRadius={rem(5)}
                                        fontSize={rem(7)}
                                        p={2}
                                        bgColor={size.includes(`500ml`) ? `primary.500` : `gray.200`}
                                        color={size.includes(`500ml`) ? `white` : `darkGrey.500`}
                                    >
                                        500ml
                                    </Badge>
                                </Radio>
                                <Radio hidden value='250ml'>
                                    <Badge
                                        borderRadius={rem(5)}
                                        fontSize={rem(7)}
                                        p={2}
                                        bgColor={size.includes(`250ml`) ? `primary.500` : `gray.200`}
                                        color={size.includes(`250ml`) ? `white` : `darkGrey.500`}
                                    >
                                        250ml
                                    </Badge>
                                </Radio>
                            </HStack>
                        </RadioGroup>
                        <HStack mt={20} spacing={4}>
                            <Flex gap={5} border={`1px solid`} p={2} borderRadius={10}>
                                <Text onClick={() => setCount(count - 1)} cursor={`pointer`}>
                                    -
                                </Text>
                                <Text>{count}</Text>
                                <Text onClick={() => setCount(count + 1)} cursor={`pointer`}>
                                    +
                                </Text>
                            </Flex>
                            <SharedButton bgColor={`transparent`} border={`1px solid`} title={`Add To Cart`} />
                            <SharedButton bgColor={`transparent`} border={`1px solid`} title={`Compare`} />
                        </HStack>
                        <Divider h={0.25} bgColor={`#D9D9D9`} my={10} />
                        <Stack w={`100%`}>
                            <Text color={`#9F9F9F`} as={Flex} gap={2} w={{ md: rem(500) }}>
                                <Text w={`20%`}>SKU</Text>:<Text w={`80%`}>SKU</Text>
                            </Text>
                            <Text color={`#9F9F9F`} as={Flex} gap={2} w={{ md: rem(500) }}>
                                <Text w={`20%`}>Category</Text>:<Text w={`80%`}>Hair Care</Text>
                            </Text>
                            <Text color={`#9F9F9F`} as={Flex} gap={2} w={{ md: rem(500) }}>
                                <Text w={`20%`}>Tags</Text>:<Text w={`80%`}>Hair, Beauty, Hygiene, Soap</Text>
                            </Text>
                            <Text color={`#9F9F9F`} as={Flex} gap={2} w={{ md: rem(500) }}>
                                <Text w={`20%`}>Share</Text>:
                                <Flex alignItems={`center`} gap={4} fontSize={`2xl`} color={`black`} w={`80%`}>
                                    <Icon icon='ic:baseline-facebook' />
                                    <Icon icon='mdi:linkedin' />
                                    <Icon icon='ant-design:twitter-circle-filled' />
                                </Flex>
                            </Text>
                            <HStack spacing={2} marginTop={2}>
                                <Icon as={`FiFacebook`} boxSize={6} />
                                <Icon as={`FiTwitter`} boxSize={6} />
                                <Icon as={`FiLinkedin`} boxSize={6} />
                                <Icon as={`FiMail`} boxSize={6} />
                            </HStack>
                        </Stack>
                    </VStack>
                    <Divider h={0.25} bgColor={`#D9D9D9`} my={10} />
                </Flex>
            </Container>
        </DefaultLayout>
    );
};
export default ShopDetails;
