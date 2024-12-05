"use client"

import {
  Box,
  Flex,
  Button,
  Link,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

export default function Navbar() {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.100", "gray.700")

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={bgColor}
      boxShadow="sm"
      borderBottom="1px"
      borderColor={borderColor}
      zIndex="sticky"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="7xl"
        mx="auto"
        px={4}
      >
        {/* Left - Logo/Company Name */}
        <Flex align="center">
          <Text
            fontSize="xl"
            fontWeight="bold"
            bgGradient="linear(to-r, blue.400, teal.400)"
            bgClip="text"
          >
            CompanyName
          </Text>
        </Flex>

        {/* Center - Navigation Links */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Link
            href="/pricing"
            fontWeight="medium"
            _hover={{ color: "blue.500" }}
          >
            Pricing
          </Link>
          <Link
            href="/testimonials"
            fontWeight="medium"
            _hover={{ color: "blue.500" }}
          >
            Testimonials
          </Link>
          <Link
            href="/faq"
            fontWeight="medium"
            _hover={{ color: "blue.500" }}
          >
            FAQ
          </Link>
        </HStack>

        {/* Right - Dashboard Button */}
        <Button
          rightIcon={<ChevronRightIcon />}
          colorScheme="blue"
          variant="solid"
          size="md"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          transition="all 0.2s"
        >
          Dashboard
        </Button>
      </Flex>
    </Box>
  )
}