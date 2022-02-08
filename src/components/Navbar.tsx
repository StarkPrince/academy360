import { Box, Flex, useColorMode } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";
// import logo from './logo.svg';

const Navbar = ({ }) =>
{
    let logo = null;
    return (
        <Flex zIndex={1} position="sticky" p={2} backgroundColor={"#713333"} top={0}>
            <Flex color={"white"} my={3}>
                <Box mr={8} my="auto" ml={3}>
                    <NextLink href="/">
                        Academy 360
                    </NextLink>
                </Box>
                <Box mr={8} my="auto">
                    <NextLink href="/">
                        Home
                    </NextLink>
                </Box>
                <Box mr={8} my="auto">
                    <NextLink href="/about">
                        About us
                    </NextLink>
                </Box>
                <Box mr={8} my="auto">
                    <NextLink href="/services">
                        Services
                    </NextLink>
                </Box>
                <Box mr={8} my="auto">
                    <NextLink href="/contact">
                        Contact us
                    </NextLink>
                </Box>
            </Flex>
            {/* <Box ml={"auto"}>
                {logo}
            </Box> */}
        </Flex>
    );
};

export default Navbar;