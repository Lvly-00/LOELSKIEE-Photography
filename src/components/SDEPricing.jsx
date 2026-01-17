import React, { useMemo } from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";

// Reusable SmartBookButton component
const SmartBookButton = ({ subject, body }) => {
  const recipientEmail = "loelskiee@gmail.com";
  const subjectEncoded = encodeURIComponent(subject);
  const bodyEncoded = encodeURIComponent(body);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subjectEncoded}&body=${bodyEncoded}`;
  const mailtoLink = `mailto:${recipientEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;

  const buttonConfig = useMemo(() => {
    if (typeof navigator === "undefined") {
      return { href: mailtoLink, target: undefined, rel: undefined };
    }

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const uaLower = userAgent.toLowerCase();

    // Detect mobile devices
    const isMobile = /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(uaLower);

    if (isMobile) {
      // Use mailto on mobile devices for better compatibility
      return { href: mailtoLink, target: undefined, rel: undefined };
    }

    const isEdge = uaLower.includes("edg");
    const isChrome = uaLower.includes("chrome") && !isEdge && !uaLower.includes("opr");

    if (isChrome || isEdge) {
      // Desktop Chrome or Edge: open Gmail web compose in new tab
      return { href: gmailLink, target: "_blank", rel: "noopener noreferrer" };
    }

    // Fallback: use mailto link
    return { href: mailtoLink, target: undefined, rel: undefined };
  }, [gmailLink, mailtoLink]);

  return (
    <Button
      component="a"
      href={buttonConfig.href}
      target={buttonConfig.target}
      rel={buttonConfig.rel}
      variant="outline"
      color="white"
      size="md"
      radius="md"
      style={{ borderWidth: "2px", fontWeight: 700 }}
    >
      BOOK NOW
    </Button>
  );
};

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
              <List.Item>1 Photographer/Drone pilot, 2 Videographer, 1 Editor & 1 Assistant.</List.Item>
              <List.Item>Photo Highlights Event Coverage.</List.Item>
              <List.Item>Video Highlights Event Coverage MTV Highlights.</List.Item>
              <List.Item>Unlimited shots + Enhancing photos.</List.Item>
              <List.Item>Google Drive space for quick and easy to download.</List.Item>
              <List.Item>Transportation fee is included.</List.Item>
              <List.Item>With BIR Original Receipt Invoice.</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

export default SDEPricing;
