import React, { useMemo } from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";
import classes from '../css/BookButton.module.css';
import { Link } from 'react-router-dom';
import { SmartBookButton, SmartBookButton2 } from "../components/SmartBookButton";
import DealsComponent from "./DealsComponent";

// --- Helper to generate email body ---
const getEmailBody = (packageName, price) => {
  return `Hi Loelskiee Photography Team,

I would like to schedule booking the ${packageName} package (${price}).

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
};

function StudioPricing() {
  return (
    <Box
      py="clamp(4rem, 8vw, 6rem)"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <Container size="lg">
        {/* HEADER */}
        <Box ta="center" mb={50}>
          <Title
            order={1}
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

        {/* MAIN DIVIDER */}
        <Divider size="xl" color="#000000ff" mb={40} />

        {/* 1. PHOTO BOOTH – ₱4,999 */}
        <Grid gutter={30} p="0 30px" mb={80}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text size="md" fw={400} mb={30}>
              PHOTO BOOTH
            </Text>
            <Text
              fw={800}
              mb={20}
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              ₱4,999
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
              Get unlimited high-quality portraits and instant memories with our complete
              photo booth package, handled by a professional photographer.
            </Text>

            <SmartBookButton2
              subject="Booking: Photo Booth Package (₱4,999)"
              body={getEmailBody("Photo Booth", "₱4,999")}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
              PACKAGE
            </Title>
            <List spacing="md" size="md">
              <List.Item>Complete Photo Booth Experience.</List.Item>
              <List.Item>Photoman.</List.Item>
              <List.Item>2 Hours of Unlimited Portrait Session.</List.Item>
              <List.Item>Capture as many high-quality portraits as you like.</List.Item>
              <List.Item>All edited images delivered via Google Drive.</List.Item>
              <List.Item>Includes 1 professional photographer.</List.Item>
            </List>
          </Grid.Col>
        </Grid>

        <Divider size="xl" color="#000000ff" mb={40} />

        {/* 2. PHOTO STUDIO – ₱7,999 */}
        <Grid gutter={30} p="0 30px" mb={80}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text size="md" fw={400} mb={30}>
              PHOTO STUDIO
            </Text>
            <Text
              fw={800}
              mb={20}
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              ₱7,999
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
              Enjoy a full studio-style booth setup with unlimited portraits,
              professional lighting, and quick delivery—perfect for events that want
              polished, high-quality photos.
            </Text>

            <SmartBookButton2
              subject="Booking: Photo Studio Package (₱7,999)"
              body={getEmailBody("Photo Studio", "₱7,999")}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
              PACKAGE
            </Title>
            <List spacing="md" size="md">
              <List.Item>Complete Studio Booth Experience.</List.Item>
              <List.Item>Photoman.</List.Item>
              <List.Item>2 Hours of Unlimited Portrait Session.</List.Item>
              <List.Item>Capture as many portraits as you like.</List.Item>
              <List.Item>All edited images delivered via Google Drive.</List.Item>
              <List.Item>Includes 1 professional photographer.</List.Item>
            </List>
          </Grid.Col>
        </Grid>

        <Divider size="xl" color="#000000ff" mb={40} />

        {/* 3. STUDIO BOOTH – ₱12,999 */}
        <Grid gutter={30} p="0 30px" mb={80}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text size="md" fw={400} mb={30}>
              STUDIO BOOTH
            </Text>
            <Text
              fw={800}
              mb={20}
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              ₱12,999
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
              A complete studio booth experience with unlimited portraits,
              enhanced 4R photos, and quick digital delivery—handled by a
              professional photographer and editor.
            </Text>

            <SmartBookButton2
              subject="Booking: Studio Booth Package (₱12,999)"
              body={getEmailBody("Studio Booth", "₱12,999")}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
              PACKAGE
            </Title>
            <List spacing="md" size="md">
              <List.Item>Complete Studio Booth Experience.</List.Item>
              <List.Item>2 Hours of Unlimited Portrait Session.</List.Item>
              <List.Item>Capture unlimited high-quality portraits.</List.Item>
              <List.Item>Enhanced digital 4R photos with standee designs.</List.Item>
              <List.Item>All edited images delivered via Google Drive.</List.Item>
              <List.Item>Includes 1 professional photographer & 1 editor.</List.Item>
            </List>
          </Grid.Col>
        </Grid>

        <Divider size="xl" color="#000000ff" mb={40} />

        {/* 4. LIVE FEED BROADCAST – ₱79,999 */}
        <Grid gutter={30} p="0 30px">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Text size="md" fw={400} mb={30}>
              LIVE FEED BROADCAST
            </Text>
            <Text
              fw={800}
              mb={20}
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              ₱79,999
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
              Experience seamless live feed broadcast with a full multi-camera
              setup and a professional team ensuring smooth real-time coverage.
            </Text>

            <SmartBookButton2
              subject="Booking: Live Feed Broadcast (₱79,999)"
              body={getEmailBody("Live Feed Broadcast", "₱79,999")}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
              PACKAGE
            </Title>
            <List spacing="md" size="md">
              <List.Item>Complete Live Feed Broadcast Experience.</List.Item>
              <List.Item>3-Man Camera Setup.</List.Item>
              <List.Item>Smooth & Reliable Coverage from Start to End.</List.Item>
              <List.Item>Includes 3 Professional Videographers & 1 Main Live Feed Director.</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>

      <Box mt={200}>
        <DealsComponent show={["PHOTO", "VIDEO", "MULTIMEDIA", "SDE"]} />
      </Box>
    </Box>
  );
}

export default StudioPricing;
