import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Heading } from "@chakra-ui/react";
import DefaultLayout from "../../layout/DefaultLayout";
import heroImg from "../../assets/hero-img-shop.png";
import { Link, Outlet } from "react-router-dom";
import { rem } from "../../utils/fontUtils";
import { Icon } from "@iconify/react/dist/iconify.js";
import BreadCrumbBanner from "../../components/BreadCrumbBanner";

const Cart = () => {
    return (
        <DefaultLayout>
            <Center flexDir={`column`} bgImage={heroImg} height={rem(316)} bgPos={`center`} bgRepeat={`no-repeat`} bgSize={`cover`} >
                <Heading fontWeight={800} fontSize={rem(40)}>
                    Cart
                </Heading>
                <Breadcrumb spacing='8px' separator={<Icon icon='material-symbols:chevron-right' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/'>
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/shop'>
                            cart
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Center>
            <BreadCrumbBanner />
            <Outlet />
        </DefaultLayout>
    );
};
export default Cart;
