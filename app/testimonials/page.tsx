"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  Flex,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Denver, CO",
    rating: 5,
    review:
      "The team did an amazing job with our Christmas lights! They transformed our home into a winter wonderland. The installation was quick and professional, and the lights looked magical all season long.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Michael Thompson",
    location: "Boulder, CO",
    rating: 5,
    review:
      "Second year using their services and couldn't be happier. The custom design they created for our two-story home was spectacular. Our house became the talk of the neighborhood!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Emily Rodriguez",
    location: "Fort Collins, CO",
    rating: 5,
    review:
      "Professional, punctual, and perfect execution! They handled everything from installation to maintenance, and even removal after the season. Worth every penny for a stress-free holiday season.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "David Wilson",
    location: "Aspen, CO",
    rating: 5,
    review:
      "The premium package exceeded our expectations. The programmable LED lights created stunning displays that we could control from our phone. Highly recommend their services!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Jennifer Martinez",
    location: "Aurora, CO",
    rating: 5,
    review:
      "Outstanding service from start to finish! They were so careful with our roof and gutters during installation. The lights were perfectly spaced and looked absolutely beautiful.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
  {
    name: "Robert Chen",
    location: "Vail, CO",
    rating: 5,
    review:
      "We needed special attention for our mountain home's unique architecture, and they delivered perfectly. The custom lighting solution they designed was exactly what we wanted.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
];

export default function TestimonialsPage() {
  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="container.xl">
        <Stack spacing={12}>
          <Box textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              color="green.700"
              fontWeight="bold"
            >
              Customer Testimonials
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
              See what our satisfied customers have to say about their Christmas
              lighting experience with us
            </Text>
          </Box>

          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={8}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                bg="white"
                boxShadow="lg"
                borderRadius="xl"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <CardBody>
                  <Stack spacing={4}>
                    <Flex align="center" spacing={4}>
                      <Avatar
                        size="md"
                        src={testimonial.image}
                        name={testimonial.name}
                        mr={4}
                      />
                      <Box>
                        <Text fontWeight="bold" fontSize="lg">
                          {testimonial.name}
                        </Text>
                        <Text color="gray.500">{testimonial.location}</Text>
                      </Box>
                    </Flex>

                    <Flex>
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <Icon
                            key={i}
                            as={StarIcon}
                            color={
                              i < testimonial.rating ? "yellow.400" : "gray.300"
                            }
                            w={4}
                            h={4}
                          />
                        ))}
                    </Flex>

                    <Text color="gray.600" fontSize="md">
                      {testimonial.review}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}