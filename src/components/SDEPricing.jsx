import React, { useMemo } from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";
import { SmartBookButton, SmartBookButton2 } from "../components/SmartBookButton";
import classes from '../css/BookButton.module.css';
import { Link } from 'react-router-dom';
import DealsComponent from "./DealsComponent";


function SDEPricing() {
  const emailSubject = "Booking Inquiry: Same Day Edit Coverage (₱44,999)";
  const emailBody = `Hi Loelskiee Photography Team,

I would like to inquire about booking the Same Day Edit (SDE) Coverage package (₱44,999).

Here are my event details:
Date: 
Time: 
Location: 
Type of Event: 

Please let me know if this date is available.

Best regards, (Your Name)`;

  return (
    <Box
      bg="#1E1E1E"
      py="clamp(4rem, 8vw, 6rem)"
      c="white"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <Container size="lg">
        {/* HEADER */}
        <Box ta="center" mb={50}>
          <Title
            order={1}
            c="white"
            fw={700}
            style={{
              letterSpacing: 1,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            PRICING
          </Title>

          <div
            style={{
              width: 180,
              height: 4,
              background: "#5D6E5C",
              margin: "15px auto 0",
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Big Divider */}
        <Divider size="xl" color="#ffffffff" mb={40} />

        <Grid gutter={50} p="0 20px">
          {/* LEFT SIDE – PRICE */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text size="md" fw={400} mb={30} c="white">
              SAME DAY EDIT COVERAGE
            </Text>

            <Text
              fw={800}
              mb={20}
              c="white"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }} // Standard Price Size
            >
              ₱44,999
            </Text>

            <Text
              size="md"
              mb={30}
              style={{
                maxWidth: 400,
                lineHeight: 1.6,
                fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
              }}
            >
              Your best moments deserve to be remembered instantly. Our Same Day
              Edit turns your photos and videos into a cinematic story — capturing
              the emotion of today, for you to relive before the day even ends.
            </Text>

            {/* SMART BOOK NOW BUTTON */}
            <SmartBookButton subject={emailSubject} body={emailBody} />
          </Grid.Col>

          {/* RIGHT SIDE – INCLUSION */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text
              fw={800}
              mt={{ base: 30, sm: 60 }}
              mb={20}
              c="white"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              INCLUSION
            </Text>

            <List spacing="md" size="md" c="white">
              <List.Item>Photo and Video Highlights Event Same Day Edit Coverage.</List.Item>
              <List.Item>1 Photographer + 2 Videographer +1 Editor + 1 Drone Pilot.</List.Item>
              <List.Item>MTV Highlights Edited Video.</List.Item>
              <List.Item>Unlimited shots + Enhancing photos.</List.Item>
              <List.Item>All photos are edited & 5mins MTV</List.Item>
              <List.Item>Good for Start & End of Program.</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>

      <Box bg="#1E1E1E" mt={200}>
        <DealsComponent show={["PHOTO", "VIDEO", "MULTIMEDIA", "STUDIO"]} />
      </Box>
    </Box>
  );
}

export default SDEPricing;
