import
{
    Box,
    Button,
    Flex, Image, Link, Stack, Text
} from "@chakra-ui/core";
import React from 'react';

function DisplayPage()
{
    return <Box p="4">
        <Flex bg="white" rounded="lg" shadow="xl">
            <Box flex="2" id="left-side" px="6" py="3" mt="12">
                <Image src="./assets/teaching.svg" alt="logo" />
            </Box>
            <Box flex="1" id="right-side" borderRadius={"20px"} px="6" pt="10" pb="10" style={{ backgroundImage: "linear-gradient(to bottom, grey 1%, #713333)" }}>
                <Text fontSize="3.4rem" fontWeight="bold" color={"white"}>
                    Services we offer
                </Text>
                <Box mt="6">
                    <form>
                        <Stack spacing="3">
                            <Text fontSize="1.3rem" color={"white"}>
                                <Link href="#service1">
                                    1. Reading Space
                                </Link>
                            </Text>
                            <Text fontSize="1.3rem" color={"white"}>
                                <Link href="#service2">
                                    2. Winter Tutions
                                </Link>
                            </Text>
                            <Text fontSize="1.3rem" color={"white"}>
                                <Link href="#service3">
                                    3. Crash Course
                                </Link>
                            </Text>
                            <Text fontSize="1.3rem" color={"white"}>
                                <Link href="#service4">
                                    4. Xyz
                                </Link>
                            </Text>
                        </Stack>
                        <Button
                            mt="8"
                            width="100%"
                            rounded="lg"
                            variant="solid"
                            size="lg"
                        >
                            Enroll with us
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex >
    </Box >;
}

export default DisplayPage;
