"use client";

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.800", "gray.900")}
      color={useColorModeValue("gray.200", "gray.100")}
    >
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Analytics Pro
              </Text>
            </Box>
            <Text fontSize="sm" lineHeight="tall">
              Empowering businesses with advanced analytics and insights. Make
              data-driven decisions with our comprehensive dashboard solutions.
            </Text>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="semibold" fontSize="lg" mb={2}>
              Quick Links
            </Text>
            <Link href="/pricing" _hover={{ color: "blue.400" }}>
              Pricing
            </Link>
            <Link href="/testimonials" _hover={{ color: "blue.400" }}>
              Testimonials
            </Link>
            <Link href="/faq" _hover={{ color: "blue.400" }}>
              FAQ
            </Link>
            <Link href="/dashboard" _hover={{ color: "blue.400" }}>
              Dashboard
            </Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="semibold" fontSize="lg" mb={2}>
              Follow Us
            </Text>
            <Stack direction="row" spacing={2}>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="md"
                color="gray.200"
                variant="ghost"
                _hover={{
                  bg: "blue.500",
                  color: "white",
                }}
              />
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="md"
                color="gray.200"
                variant="ghost"
                _hover={{
                  bg: "blue.600",
                  color: "white",
                }}
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="md"
                color="gray.200"
                variant="ghost"
                _hover={{
                  bg: "pink.500",
                  color: "white",
                }}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
        <Box borderTopWidth={1} borderStyle="solid" borderColor="gray.600" pt={8}>
          <Text pt={2} fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} Analytics Pro. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}