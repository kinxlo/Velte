/* eslint-disable react/prop-types */
import { Box, Avatar, Text, VStack, Flex } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { rem } from "../../utils/fontUtils";

const ReviewCard = ({ review }) => {
    return (
        <Box boxShadow={`0px 4px 4px 0px #00000040`} borderRadius={5} w={{ xl: rem(372) }} overflow='hidden' p={5} bg='white'>
            <VStack spacing={4} align='flex-start'>
                <Avatar
                    size='xl'
                    src={review?.imageUrl || `https://res.cloudinary.com/kingsleysolomon/image/upload/v1720194103/portfolio/qi1qbonhxjwxa567llhd.jpg`}
                    name={review?.name}
                />
                <Text>
                    <Text as={`span`} fontWeight={700}>
                        Customers Name:
                    </Text>
                    {review?.name || `Mojisola`}
                </Text>
                <Text>
                    <Text fontWeight={700} as={`span`}>
                        Customers Review:
                    </Text>{" "}
                    {review.review || ` After applying the lip oil, my lips are always glowing`}
                </Text>
                <Flex w={`100%`} gap={5} alignItems={`center`} mb={5}>
                    <Text fontWeight={700}>CUSTOMER RATING:</Text>
                    <StarRatings starRatedColor={`#3498DB`} rating={4} starDimension={rem(20)} starSpacing={rem(1)} />
                </Flex>
            </VStack>
        </Box>
    );
};

export default ReviewCard;
