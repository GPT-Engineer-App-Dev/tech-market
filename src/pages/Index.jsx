import { Box, Container, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "A modern smartphone with a sleek design and vibrant display.",
    price: "$699",
    image: "/images/sample-product-1.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "A high-end laptop with a thin profile and elegant design.",
    price: "$1299",
    image: "/images/sample-product-2.jpg",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description: "Compact and stylish wireless earbuds with excellent sound quality.",
    price: "$199",
    image: "/images/sample-product-3.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">
          Welcome to Our Electronics Store
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={product.image} alt={product.name} />
              <VStack align="start" mt={4}>
                <Text fontSize="2xl" fontWeight="bold">
                  {product.name}
                </Text>
                <Text>{product.description}</Text>
                <Text fontSize="xl" color="teal.500" fontWeight="bold">
                  {product.price}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;