
import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Container maxW='container.md' py={10} textAlign='center'>
            <VStack spacing={5}>
                <Heading fontSize='6xl' color='blue.500'>
                    404
                </Heading>
                <Text fontSize='xl' color='gray.600'>
                    Oops! The page you are looking for does not exist.
                </Text>
                <Text>It might have been moved or deleted.</Text>
                <Button as={RouterLink} to='/' colorScheme='blue' size='lg'>
                    Go Back Home
                </Button>
            </VStack>
        </Container>
    );
};

export default NotFoundPage;
