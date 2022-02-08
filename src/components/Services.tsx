import { Box, Flex, Heading, Image } from '@chakra-ui/core';


const properties = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageAlt: 'Reading Space',
        description: 'We know its too difficult to concentrate on study in home so we provide you with a reading space',
        title: 'Reading Space',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1611332221169-63cbe0c60236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageAlt: 'Winter Study',
        description: 'This is a description of the property',
        title: 'Winter Study',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageAlt: 'Crash Course',
        description: 'If you missed the first day of your studies, we can help you with your first day',
        title: 'Crash Course',
    },
    {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Other Features',
        description: 'We have a lot of other features that you can use to make your study experience more efficient',
        title: 'Other Features',
    },
]

export default function Services()
{
    return (
        <>
            <Flex>
                <Heading as="h1" size="lg" fontSize={'3.1rem'} m="4" mx="auto">
                    Services we offer
                </Heading>
            </Flex>
            <Flex>
                {properties.map((property, index) => (
                    <Box id={`service${index + 1}`} maxW='sm' borderWidth='1px' borderRadius='lg' key={index} overflow='hidden' py='3' my="2" px="2" mx="2">
                        <Image src={property.imageUrl} alt={property.imageAlt} />

                        <Box p='6'>
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                            >
                                {property.title}
                            </Box>
                            <Box>{property.description}</Box>
                        </Box>
                    </Box>)
                )}
            </Flex>
        </>
    )
}