/* eslint-disable react/prop-types */
import { Box, Image, Text, Heading, Card, Flex, Center } from "@chakra-ui/react";
import { useState } from "react";
import { rem } from "../../utils/fontUtils";

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
        >
            <Image objectFit={`cover`} h={rem(301)} src={product.imageUrl} alt={product.imageAlt} opacity={isHovered ? 0.2 : 1} transition='opacity 0.3s' />

            <Flex flexDir={`column`} gap={2} p='6'>
                <Box pos={`absolute`} top={4} right={4} display='flex' alignItems='baseline'>
                    <Center w={rem(50)} p={5} h={rem(50)} color={`white`} borderRadius='full' bgColor={`accent.500`}>
                        <Text fontSize={{ md: `sm` }}>-30%</Text>
                    </Center>
                </Box>

                <Heading fontSize={{ base: 16, md: rem(24) }} as='h3'>
                    {product.title}
                </Heading>
                <Text>{product.category}</Text>
                <Flex gap={10}>
                    <Heading fontSize={rem(20)} as='h4' textDecoration='line-through'>
                        N{product.originalPrice}
                    </Heading>
                    <Text color={`#B0B0B0`}>N{product.discountedPrice}</Text>
                </Flex>
            </Flex>
        </Card>
    );
};

export default ProductCard;
