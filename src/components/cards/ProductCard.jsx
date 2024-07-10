/* eslint-disable react/prop-types */
import { Box, Image, Text, Heading, Card, Flex, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { rem } from "../../utils/fontUtils";
import SharedButton from "../SharedButton";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            w={{ lg: rem(285) }}
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            position='relative'
            border={`none`}
            bgColor={`#ECF0F1`}
            boxShadow={` 0px 4px 4px 0px #00000040`}
            justifyContent={`space-between`}
        >
            <Image objectFit={`cover`} h={rem(301)} src={product.imageUrl} alt={product.imageAlt} opacity={isHovered ? 0.2 : 1} transition='opacity 0.3s' />
            {/* {isHovered && (
                <Center
                    position='absolute'
                    top='0'
                    left='0'
                    width='100%'
                    height='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    bg='rgba(0, 0, 0, 0.5)'
                    gap={10}
                >
                    <SharedButton isDisabled={true} py={6} w={`70%`} bgColor={`primary.500`} color={`white`} borderRadius={0} title={`View Product`} />
                    <SharedButton
                        as={Link}
                        to={`/cart/${product?.title}/checkout`}
                        state={product}
                        py={6}
                        w={`70%`}
                        color={`primary.500`}
                        bgColor={`white`}
                        borderRadius={0}
                        title={`Add to cart`}
                    />
                </Center>
            )} */}
            <Flex h={`40%`} flexDir={`column`} gap={2} p='6'>
                {product?.new ? (
                    <Box pos={`absolute`} top={4} right={4} display='flex' alignItems='baseline'>
                        <Center w={rem(50)} p={5} h={rem(50)} color={`white`} borderRadius='full' bgColor={`secondary.500`}>
                            <Text fontSize={{ md: `sm` }}>New</Text>
                        </Center>
                    </Box>
                ) : (
                    <Box pos={`absolute`} top={4} right={4} display='flex' alignItems='baseline'>
                        <Center w={rem(50)} p={5} h={rem(50)} color={`white`} borderRadius='full' bgColor={`accent.500`}>
                            <Text fontSize={{ md: `sm` }}>-{product?.discountPercentage}%</Text>
                        </Center>
                    </Box>
                )}

                <Stack h={`100%`} justifyContent={`space-between`}>
                    <Heading fontSize={{ base: 16, md: rem(24) }} as='h3'>
                        {product.title}
                    </Heading>
                    <Text>{product.category}</Text>
                    <Flex alignItems={`flex-end`} justifyContent={`space-between`}>
                        <Stack>
                            <Heading fontSize={rem(20)} as='h4' textDecoration={product?.discountedPrice ? `line-through` : null}>
                                N{product.originalPrice}
                            </Heading>
                            <Text hidden={!product?.discountedPrice} color={`#B0B0B0`}>
                                N{product.discountedPrice}
                            </Text>
                        </Stack>
                        <SharedButton
                            size={`sm`}
                            as={Link}
                            to={`/cart/${product?.title}/checkout`}
                            state={product}
                            py={5}
                            w={rem(121)}
                            bgColor={`primary.500`}
                            color={`white`}
                            borderRadius={5}
                            title={`Add to cart`}
                        />
                    </Flex>
                </Stack>
            </Flex>
        </Card>
    );
};

export default ProductCard;
