import { Box, Center, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import DefaultLayout from "../../layout/DefaultLayout";
import heroImg from "../../assets/hero-img.png";
import { rem } from "../../utils/fontUtils";
import SharedButton from "../../components/SharedButton";
import CollectionCard from "../../components/cards/CollectionCard";
import ProductCard from "../../components/cards/ProductCard";
import FeaturedProduct from "../../views/FeaturedProduct";
import ReviewCard from "../../components/cards/ReviewCard";
import { Link } from "react-router-dom";

const productList = [
    {
        title: "Face Foam Wash",
        category: "Face & Lip Care",
        originalPrice: "3,500.00",
        discountedPrice: null,
        imageUrl: "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png",
        imageAlt: "Face Foam Wash",
    },
    {
        title: "Face Moisturizer",
        category: "Face & Lip Care",
        originalPrice: "3,500.00",
        discountedPrice: "2,450.00",
        imageUrl: "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png",
        imageAlt: "Face Moisturizer",
    },
    {
        title: "Face Foam Wash",
        category: "Face & Lip Care",
        originalPrice: "3,500.00",
        discountedPrice: null,
        imageUrl: "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png",
        imageAlt: "Face Foam Wash",
    },
    {
        title: "Face Moisturizer",
        category: "Face & Lip Care",
        originalPrice: "3,500.00",
        discountedPrice: "2,450.00",
        imageUrl: "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png",
        imageAlt: "Face Moisturizer",
    },
    {
        title: "Face Foam Wash",
        category: "Face & Lip Care",
        originalPrice: "3,500.00",
        discountedPrice: "2,450.00",
        imageUrl: "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png",
        imageAlt: "Face Foam Wash",
    },
    {
        title: "Face Moisturizer",
        category: "Face & Lip Care",
        originalPrice: "3,500.00",
        discountedPrice: "2,450.00",
        imageUrl: "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png",
        imageAlt: "Face Moisturizer",
    },
    {
        title: "Face Foam Wash",
        category: "Face & Lip Care",
        originalPrice: "3,500.00",
        discountedPrice: "2,450.00",
        imageUrl: "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png",
        imageAlt: "Face Foam Wash",
    },
    {
        title: "Face Moisturizer",
        category: "Face & Lip Care",
        originalPrice: "3,500.00",
        discountedPrice: "2,450.00",
        imageUrl: "https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png",
        imageAlt: "Face Moisturizer",
    },
];

const Home = () => {
    // const { state, dispatch } = useContext(AppContext);

    // const handleLogout = () => {
    //     dispatch({ type: "LOGOUT" });
    // };

    return (
        <DefaultLayout>
            <Box bgImage={heroImg} bgPosition={`center`} bgRepeat={`no-repeat`} bgSize={`cover`} h={rem(716.83)}>
                <Container pb={5} maxW={`1333.5`} h={`100%`} as={Center} justifyContent={`flex-end`} alignItems={`flex-end`}>
                    <VStack
                        p={rem(30)}
                        textAlign={`center`}
                        justifyContent={`space-between`}
                        alignItems={{ base: `center`, md: `flex-start` }}
                        borderRadius={rem(10)}
                        bg={`#C4888E`}
                        maxH={rem(443)}
                        maxW={rem(712)}
                        gap={10}
                    >
                        <Heading fontSize={{ base: rem(24), md: rem(40) }} color={`white`} as={`h1`}>
                            Unveil Your Natural Glow with Velte Beauty
                        </Heading>
                        <Heading p={{ md: rem(40) }} px={{ md: rem(100) }} fontSize={{ base: rem(16), md: rem(24) }} as={`h3`}>
                            Luxury Skincare Inspired by Nature, Perfected by Science
                        </Heading>
                        <SharedButton
                            as={Link}
                            to={`/shop`}
                            title={`Buy Now`}
                            w={rem(180)}
                            h={rem(59)}
                            bgColor={`secondary.500`}
                            color={`white`}
                            boxShadow={`0px 4px 10px 0px #00000040`}
                        />
                    </VStack>
                </Container>
            </Box>
            <Container maxW={`1333.5`} as={VStack} my={10}>
                <Box mb={10}>
                    <Heading as={`h1`}>Browse Our Collection</Heading>
                    <Text>Discover the perfect products for your beauty routine</Text>
                </Box>
                <SimpleGrid w={`100%`} columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
                    <CollectionCard
                        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/hrwzlua9ghnfcctpzmql.png`}
                        title={`Lip & Face Care`}
                    />
                    <CollectionCard
                        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/ukeqmlk40frjxhgopfje.png`}
                        title={`Hair Care`}
                    />
                    <CollectionCard
                        image={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1720360327/HNG/y7iri9ujt00i1wjt1u6j.png`}
                        title={`Bath & Body`}
                    />
                </SimpleGrid>
            </Container>
            <Container maxW={`1333.5`} as={VStack} my={20}>
                <Box mb={10}>
                    <Heading as={`h1`}>Our Products</Heading>
                </Box>
                <SimpleGrid w={`100%`} columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
                    {productList.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </SimpleGrid>
            </Container>
            <Box py={20} bgColor={`accentYellow.500`}>
                <Container maxW={`1333.5`}>
                    <FeaturedProduct />
                </Container>
            </Box>
            <Box py={20} mt={40} bgColor={`accentYellow.500`}>
                <Container maxW={`1333.5`}>
                    <Box textAlign={`center`} mb={10}>
                        <Heading as={`h1`}>What Our Customers Say</Heading>
                        <Text>Real reviews from our satisfied customers</Text>
                    </Box>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                        <ReviewCard review={{}} />
                        <ReviewCard review={{}} />
                        <ReviewCard review={{}} />
                        <ReviewCard review={{}} />
                        <ReviewCard review={{}} />
                        <ReviewCard review={{}} />
                    </SimpleGrid>
                </Container>
            </Box>
        </DefaultLayout>
    );
};
export default Home;
