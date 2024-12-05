"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
} from "@chakra-ui/react";

export default function FAQPage() {
  return (
    <Container maxW="4xl" py={12}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            bgGradient="linear(to-r, red.600, green.600)"
            bgClip="text"
          >
            Frequently Asked Questions
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Find answers to common questions about our Christmas lighting services
          </Text>
        </Box>

        <Accordion allowMultiple>
          {/* General Service Information */}
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "red.50" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  What areas do you service?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We currently service residential and commercial properties within a 50-mile radius of the greater metropolitan area. Contact us to confirm if your location is within our service area.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "red.50" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  How early should I book your services?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We recommend booking at least 6-8 weeks before your desired installation date. The holiday season is our busiest time, and early booking ensures you get your preferred installation date.
            </AccordionPanel>
          </AccordionItem>

          {/* Installation Process */}
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  How long does installation typically take?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Installation time varies depending on the size of your property and the complexity of the design. Most residential installations take 2-4 hours, while larger commercial projects may require a full day or more.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Do you provide the lights and decorations?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes! We provide all lights, decorations, and necessary hardware as part of our service packages. We use commercial-grade LED lights that are energy-efficient and durable.
            </AccordionPanel>
          </AccordionItem>

          {/* Maintenance & Support */}
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "red.50" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  What if lights stop working during the season?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We offer 24/7 support throughout the holiday season. If any lights malfunction, we'll respond within 24-48 hours to repair or replace them at no additional cost.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "red.50" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  When do you take down the lights?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We typically schedule removal in January, after the holiday season. The exact timing can be customized to your preferences, and removal is included in all our service packages.
            </AccordionPanel>
          </AccordionItem>

          {/* Pricing & Packages */}
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  What payment methods do you accept?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We accept all major credit cards, debit cards, and digital payment methods. We offer flexible payment plans and require a 50% deposit to secure your installation date.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green.50" }}>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Do you offer custom designs?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes! While we offer standard packages, we specialize in creating custom lighting designs tailored to your property and preferences. Schedule a consultation to discuss your vision.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Container>
  );
}