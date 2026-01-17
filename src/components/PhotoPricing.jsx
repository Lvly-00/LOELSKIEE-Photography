import React, { useMemo } from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";

// SmartBookButton with mobile-friendly mailto fallback
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

    // Simple mobile detection
    const isMobile = /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(uaLower);

    if (isMobile) {
      // Use mailto: on mobile for best compatibility
      return { href: mailtoLink, target: undefined, rel: undefined };
    }

    const isEdge = uaLower.includes("edg");
    const isChrome = uaLower.includes("chrome") && !isEdge && !uaLower.includes("opr");

    if (isChrome || isEdge) {
      // Use Gmail web compose on Chrome/Edge desktop
      return { href: gmailLink, target: "_blank", rel: "noopener noreferrer" };
    }

    // Default fallback to mailto:
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
              <List.Item>Including 1 Photographer.</List.Item>
              <List.Item>Photo Highlights Event Coverage.</List.Item>
              <List.Item>Unlimited shots + Enhancing photos.</List.Item>
              <List.Item>
                Uploading photos thru Google Drive within 1–3 working days.
              </List.Item>
              <List.Item>Additional ₱1,000 for succeeding hours.</List.Item>
              <List.Item>Good for first 2 hours.</List.Item>
              <List.Item>With BIR Original Receipt Invoice.</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

export default PhotoPricing;
