import React, { useMemo } from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";
import { SmartBookButton, SmartBookButton2 }  from "../components/SmartBookButton";
import classes from '../css/BookButton.module.css';
import { Link } from 'react-router-dom';
import DealsComponent from "./DealsComponent";


function MultimediaPricing() {
  // Email content for multimedia package
  const emailSubject = "Booking Inquiry: Multimedia Coverage Package (14,999)";
  const emailBody = `Hi Loelskiee Photography Team,

I would like to schedule booking the Multimedia Coverage package (14,999).

Here are my event details
Type of Event: 
Date: 
Time: 
Location: 
Contact Person: 
Contact Number: 

Note: A ₱500 down payment is required to secure the slot and send the downpayment to our page once you're done.

For other inquiries, you may also reach us through our Facebook page:
https://facebook.com/Loelskieez

Best regards,
(Your Name)`;

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
        <Divider size="xl" color="#ffffffff" mb={50} />

        <Grid gutter={50} p="0 20px">
          {/* LEFT SIDE – PRICE */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text size="md" fw={400} mb={30} c="white">
              MULTIMEDIA COVERAGE
            </Text>

            <Text
              fw={800}
              mb={20}
              c="white"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }} 
            >
              ₱14,999
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
              Every shot tells a story, and every frame holds emotion. Through our
              photo and video coverage, we capture not just what happened, but how it
              felt — turning your moments into memories you’ll want to relive again and again.
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
              <List.Item>Photo and Video Highlights Event Coverage.</List.Item>
              <List.Item>1 Photographer + & 1 Videographer.</List.Item>
              <List.Item>MTV Highlights Edited Video.</List.Item>
              <List.Item>Unlimited shots + Enhancing photos.</List.Item>
              <List.Item>All photos are edited & 5mins MTV</List.Item>
              <List.Item>Good for the first 4 hours.</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>

       <Box bg="#1E1E1E"  mt={200}>
        <DealsComponent show={["PHOTO", "VIDEO", "SDE", "STUDIO"]} />
      </Box>
    </Box>
  );
}

export default MultimediaPricing;
