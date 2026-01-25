import React, { useMemo } from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";
import classes from '../css/BookButton.module.css';
import { Link } from 'react-router-dom';
import { SmartBookButton, SmartBookButton2 } from "../components/SmartBookButton";
import DealsComponent from "./DealsComponent";


function PhotoPricing() {
  // Email Content Helper
  const emailSubject = "Booking Inquiry: Photo Coverage Package (₱4,999)";
  const emailBody = `Hi Loelskiee Photography Team,

I would like to inquire about booking the Photo Coverage package (₱4,999).

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

        <Divider size="xl" color="#ffffffff" mb={50} />

        <Grid gutter={50} p="0 20px">
          {/* LEFT SIDE – PRICE */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text size="md" fw={400} mb={30} c="white">
              PHOTO COVERAGE
            </Text>

            <Text
              fw={800}
              mb={20}
              c="white"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }} // Standard Price Size
            >
              ₱2,999
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
              Photos tell stories that words can’t. Our coverage captures real
              moments and emotions, turning every occasion into lasting memories.
            </Text>

            {/* SMART BUTTON */}
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
              <List.Item>Photo Highlights Event Coverage.</List.Item>
              <List.Item>1 Photographer included.</List.Item>
              <List.Item>Unlimited shots + Enhancing photos.</List.Item>
              <List.Item>
                All photos are edited.
              </List.Item>
              <List.Item>Additional ₱1,000 for succeeding hours.</List.Item>
              <List.Item>Good for first starting 2 hours.</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>
      <Box bg="#1E1E1E"  mt={200}>
        <DealsComponent show={["VIDEO", "MULTIMEDIA", "SDE", "STUDIO"]} />


      </Box>
    </Box>
  );
}

export default PhotoPricing;
