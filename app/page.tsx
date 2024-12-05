'use client';

import { Box, Button, Flex, Heading, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <Box as="main" bg="white" color="gray.800" minH="100vh">
      {/* Hero Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="green.500"
        color="white"
        py={20}
        px={4}
        textAlign="center"
      >
        <Heading as="h1" size="2xl" mb={4}>
          Brighten Your Holidays with Our Christmas Lighting!
        </Heading>
        <Text fontSize="lg" maxW="600px">
          Transform your home into a winter wonderland with our professional Christmas lighting services.
        </Text>
      </Flex>

      {/* Social Proof Section */}
      <Box py={16} px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Our Work Speaks for Itself
        </Heading>
        <Flex justify="center" wrap="wrap" gap={6}>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
            <Text>Project 1</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
            <Text>Project 2</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
            <Text>Project 3</Text>
          </Box>
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box bg="red.500" color="white" py={16} px={4}>
        <VStack spacing={8} maxW="600px" mx="auto">
          <Heading as="h2" size="xl">
            Get in Touch
          </Heading>
          <Stack spacing={4} w="100%">
            <Input placeholder="Your Name" bg="white" color="gray.800" />
            <Input placeholder="Your Email" bg="white" color="gray.800" />
            <Textarea placeholder="Your Message" bg="white" color="gray.800" />
            <Button colorScheme="green" size="lg">
              Send Message
            </Button>
          </Stack>
        </VStack>
      </Box>

      {/* Call-to-Action Section */}
      <Box py={16} px={4} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Ready to Light Up Your Home?
        </Heading>
        <Button colorScheme="green" size="lg">
          Book Your Installation Today
        </Button>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="center" gap={4}>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </Flex>
        <Text textAlign="center" mt={2}>
          © 2023 Christmas Lighting Co.
        </Text>
      </Box>
    </Box>
  );
}