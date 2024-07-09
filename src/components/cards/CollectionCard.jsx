/* eslint-disable react/prop-types */
import { Card, Image, Text, VStack } from "@chakra-ui/react";
import { rem } from "../../utils/fontUtils";

const CollectionCard = ({ image, title }) => {
    return (
        <VStack>
            <Card overflow={`hidden`} box-shadow={`0px 4px 4px 0px #00000040`} w={{ xl: rem(381) }} h={rem(480)}>
                <Image src={image} alt={title} w={`100%`} h={`100%`} objectFit={`cover`} />
            </Card>
            <Text fontWeight={700} fontSize={{ base: rem(16), md: rem(24) }}>
                {title}
            </Text>
        </VStack>
    );
};
export default CollectionCard;
