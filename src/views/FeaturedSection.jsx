/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { rem } from "../utils/fontUtils";

const FeatureSection = () => {
    return (
        <Flex justifyContent={`space-between`} flexDir={{ base: `column`, lg: `row` }} gap={10}>
            <Feature icon={`octicon:trophy-16`} title='High Quality' description='Crafted from top materials' />
            <Feature icon={`humbleicons:verified`} title='Warranty Protection' description='Over 2 years' />
            <Feature icon={`akar-icons:shipping-box-02`} title='Free Shipping' description='Order over ₦20,000' />
            <Feature icon={`fluent:person-support-20-regular`} title='24 / 7 Support' description='Dedicated support' />
        </Flex>
    );
};

const Feature = ({ icon, title, description }) => (
    <Flex flexDirection={{ base: `column`, lg: `row` }} alignItems={`center`} gap={4}>
        <Box fontSize={`5xl`}>
            <Icon icon={icon} color='black' mb={4} />
        </Box>
        <Box textAlign={{ base: `center`, lg: `initial` }}>
            <Text fontWeight='bold' fontSize={{ base: rem(18), lg: rem(24) }}>
                {title}
            </Text>
            <Text color='gray.600'>{description}</Text>
        </Box>
    </Flex>
);

export default FeatureSection;
