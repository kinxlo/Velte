import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Container, Flex, Heading, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import DefaultLayout from "../../layout/DefaultLayout";
import heroImg from "../../assets/hero-img-shop.png";
import { rem } from "../../utils/fontUtils";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProductCard from "../../components/cards/ProductCard";
import { productList } from "../../utils/products";
import FeatureSection from "../../views/FeaturedSection";
import SharedButton from "../../components/SharedButton";
import { Link } from "react-router-dom";

const Shop = () => {
    return (
        <DefaultLayout>
            <Center flexDir={`column`} bgImage={heroImg} height={rem(316)} bgPos={`center`} bgRepeat={`no-repeat`} bgSize={`cover`}>
                <Heading fontWeight={800} fontSize={rem(40)}>
                    Shop
                </Heading>
                <Breadcrumb spacing='8px' separator={<Icon icon='material-symbols:chevron-right' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/'>
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/shop'>
                            Shop
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Center>
            <Box bgColor={`darkGrey.500`}>
                <Container maxW={rem(1333.5)} color={`white`}>
                    <Flex gap={5} flexDir={{ base: `column`, lg: `row` }} alignItems={`center`} justifyContent={`space-between`} py={10}>
                        <Flex flexDir={{ base: `column`, md: `row` }} fontSize={{ base: rem(20), md: rem(24) }} alignItems={`center`} gap={5}>
                            <Flex fontSize={{ base: rem(20), md: rem(24) }} alignItems={`center`} gap={5}>
                                <Icon icon='system-uicons:filtering' />
                                <Text fontWeight={600} fontSize={`lg`}>
                                    Filter
                                </Text>
                                <Icon icon='ph:dots-nine-bold' />
                                <Icon icon='bi:view-list' />
                                <Text color={`black`}>|</Text>
                            </Flex>
                            <Text fontSize={{ base: `xs`, md: `lg` }}>Showing 1–16 of 32 results</Text>
                        </Flex>
                        <Flex flexDir={{ base: `column`, md: `row` }} gap={10}>
                            <Flex alignItems={{ md: `center` }} flexDir={{ base: `column`, md: `row` }} gap={5}>
                                <Text>Show</Text>
                                <Box>
                                    <Input maxLength={3} color={`darkGrey.500`} bgColor={`white`} type={`number`} borderRadius={`none`} w={rem(70)} />
                                </Box>
                            </Flex>
                            <Flex alignItems={{ md: `center` }} flexDir={{ base: `column`, md: `row` }} gap={5}>
                                <Text>Sort by</Text>
                                <Box>
                                    <Input color={`darkGrey.500`} bgColor={`white`} borderRadius={`none`} />
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
            <Container maxW={`1333.5`} as={VStack} my={20}>
                <SimpleGrid w={`100%`} columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
                    {productList.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </SimpleGrid>
                <Center my={10} gap={10}>
                    <SharedButton bgColor={`primary.500`} color={`white`} title={1} />
                    <SharedButton bgColor={`gray.300`} title={2} />
                </Center>
            </Container>
            <Box py={10} bgColor={`accentYellow.500`}>
                <Container maxW={`1333.5`}>
                    <FeatureSection />
                </Container>
            </Box>
        </DefaultLayout>
    );
};
export default Shop;
