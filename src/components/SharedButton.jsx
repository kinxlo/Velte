/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";

const SharedButton = ({ title, ...props }) => {
    return <Button {...props}>{title}</Button>;
};

export default SharedButton;
