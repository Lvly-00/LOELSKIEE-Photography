import React, { useMemo } from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";
import { SmartBookButton, SmartBookButton2 }  from "../components/SmartBookButton";
import classes from '../css/BookButton.module.css';
import { Link } from 'react-router-dom';



function VideoPricing() {
  // Email details
  const emailSubject = "Booking Inquiry: Video Coverage Package (₱9,999)";
  const emailBody = `Hi Loelskiee Photography Team,

I would like to inquire about booking the Video Coverage package (₱9,999).

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
        <Divider size="xl" color="#ffffffff" mb={50} />

        <Grid gutter={50} p="0 20px">
          {/* LEFT SIDE – PRICE */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text size="md" fw={400} mb={30} c="white">
              VIDEO COVERAGE
            </Text>

            <Text
              fw={800}
              mb={20}
              c="white"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              ₱9,999
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
              Every frame tells a story, and every motion holds meaning. Through
              our video coverage, we capture not just what happened, but how it
              felt. Let us turn your event into a timeless film you’ll want to
              relive again and again.
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
              <List.Item>Video Highlights Event Coverage.</List.Item>
              <List.Item>1 Videographer Included.</List.Item>
              <List.Item>MTV Event Highlights Edited Video.</List.Item>
              <List.Item>Additional 1k for succeeding hours.</List.Item>
              <List.Item>Good for first starting 4 hours.</List.Item>
            </List>
          </Grid.Col>
        </Grid>

        <Box mt={200} p={10} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            component={Link}
            to="/#deals"
            color="white"
            variant="outline"
            size="lg"
            radius="md"
            classNames={{ root: classes.root }}

          >
            BACK TO DEALS
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default VideoPricing;
