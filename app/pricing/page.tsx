"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  ListIcon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle, FaStar, FaSnowflake, FaGift } from "react-icons/fa";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  icon: typeof FaStar;
  popularChoice?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic Package",
    price: "$499",
    description: "Perfect for small homes and simple displays",
    icon: FaSnowflake,
    features: [
      { text: "Up to 100ft of LED lights", included: true },
      { text: "Professional installation", included: true },
      { text: "Basic timer controls", included: true },
      { text: "Post-season removal", included: true },
      { text: "Storage service", included: false },
      { text: "Custom design consultation", included: false },
    ],
  },
  {
    name: "Premium Package",
    price: "$999",
    description: "Our most popular choice for medium to large homes",
    icon: FaStar,
    popularChoice: true,
    features: [
      { text: "Up to 250ft of LED lights", included: true },
      { text: "Professional installation", included: true },
      { text: "Smart controls & scheduling", included: true },
      { text: "Post-season removal", included: true },
      { text: "Storage service", included: true },
      { text: "Basic design consultation", included: true },
    ],
  },
  {
    name: "Custom Package",
    price: "Custom",
    description: "Tailored solutions for unique properties",
    icon: FaGift,
    features: [
      { text: "Unlimited lighting options", included: true },
      { text: "Professional installation", included: true },
      { text: "Advanced smart controls", included: true },
      { text: "Post-season removal", included: true },
      { text: "Premium storage service", included: true },
      { text: "Expert design consultation", included: true },
    ],
  },
];

const PricingCard = ({ tier }: { tier: PricingTier }) => {
  const cardBg = useColorModeValue("white", "gray.700");
  const popularBg = useColorModeValue("green.50", "green.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const popularBorderColor = useColorModeValue("green.500", "green.400");

  return (
    <Box
      position="relative"
      bg={tier.popularChoice ? popularBg : cardBg}
      border="1px solid"
      borderColor={tier.popularChoice ? popularBorderColor : borderColor}
      borderRadius="xl"
      p={6}
      shadow="xl"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-8px)" }}
    >
      {tier.popularChoice && (
        <Text
          position="absolute"
          top="-4"
          right="50%"
          transform="translateX(50%)"
          bg="green.500"
          color="white"
          px={4}
          py={1}
          borderRadius="full"
          fontSize="sm"
          fontWeight="bold"
        >
          Most Popular
        </Text>
      )}
      <Stack spacing={4} textAlign="center" height="100%">
        <Icon as={tier.icon} w={10} h={10} color="green.500" mx="auto" />
        <Heading size="lg" color={tier.popularChoice ? "green.500" : undefined}>
          {tier.name}
        </Heading>
        <Text fontSize="3xl" fontWeight="bold">
          {tier.price}
        </Text>
        <Text color="gray.500">{tier.description}</Text>
        <List spacing={3} textAlign="left" px={4} mb={6}>
          {tier.features.map((feature, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <ListIcon
                as={FaCheckCircle}
                color={feature.included ? "green.500" : "gray.300"}
              />
              <Text color={feature.included ? undefined : "gray.400"}>
                {feature.text}
              </Text>
            </ListItem>
          ))}
        </List>
        <Button
          colorScheme={tier.popularChoice ? "green" : "red"}
          size="lg"
          mt="auto"
          _hover={{
            transform: "scale(1.05)",
          }}
        >
          Get Started
        </Button>
      </Stack>
    </Box>
  );
};

export default function PricingPage() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={20}>
      <Container maxW="7xl">
        <Stack spacing={10} textAlign="center" mb={16}>
          <Heading
            as="h1"
            size="2xl"
            bgGradient="linear(to-r, red.500, green.500)"
            bgClip="text"
          >
            Christmas Lighting Packages
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Choose the perfect holiday lighting package for your home
          </Text>
        </Stack>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={8}
          align="stretch"
        >
          {pricingTiers.map((tier) => (
            <Box key={tier.name} flex={1}>
              <PricingCard tier={tier} />
            </Box>
          ))}
        </Flex>
        <Box mt={16} textAlign="center">
          <Text color="gray.500">
            All packages include professional grade LED lights and installation by
            certified technicians.
          </Text>
          <Text color="gray.500" mt={2}>
            Contact us for custom quotes and special requirements.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}