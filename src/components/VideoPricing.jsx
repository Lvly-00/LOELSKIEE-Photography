import React, { useMemo } from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";

function VideoPricing() {

    // 1. Define Email Details for Video Package
    const recipientEmail = "loelskiee@gmail.com";
    const emailSubject = "Booking Inquiry: Video Coverage Package (₱9,999)";
    const emailBody = `Hi Loelskiee Photography Team,

I would like to inquire about booking the Video Coverage package (₱9,999).

Here are my event details:
Date: 
Time: 
Location: 
Type of Event: 

Please let me know if this date is available.

Best regards,`;

    // 2. Helper to encode strings for URLs
    const subjectEncoded = encodeURIComponent(emailSubject);
    const bodyEncoded = encodeURIComponent(emailBody);

    // 3. Define the two types of links
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subjectEncoded}&body=${bodyEncoded}`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // 4. "Smart" Logic to detect browser
    const buttonConfig = useMemo(() => {
        const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';

        // Detect Browsers
        const isEdge = userAgent.includes('edg'); // Microsoft Edge
        const isChrome = userAgent.includes('chrome') && !isEdge && !userAgent.includes('opr'); // Chrome (excluding Edge/Opera)

        // LOGIC:
        // If Chrome or Edge -> Open Gmail Website in new tab
        if (isChrome || isEdge) {
            return {
                href: gmailLink,
                target: "_blank",
                rel: "noopener noreferrer"
            };
        }

        // If Safari (or anything else) -> Open Default Mail App
        return {
            href: mailtoLink,
            target: undefined,
            rel: undefined
        };

    }, [gmailLink, mailtoLink]);

    return (
        <Box bg="#1E1E1E" pt={80} pb={120} c="white">
            <Container size="lg">
                {/* HEADER */}
                <Box ta="center" mb={50}>
                    <Title order={1} c="white" fw={700} style={{ letterSpacing: 1 }}>
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
                <Divider
                    size="xl"
                    color="#ffffffff"
                    mb={40}
                />

                <Grid gutter={30} p="0 30px" >
                    {/* LEFT SIDE – PRICE */}
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" fw={400} mb={30} c="white">
                            VIDEO COVERAGE
                        </Text>

                        <Text fw={800} mb={20} c="white" style={{
                            fontSize: "2.5rem"
                        }}>
                            ₱9,999
                        </Text>

                        <Text size="md" mb={25} style={{ maxWidth: 350, lineHeight: 1.6 }}>
                            Every frame tells a story, and every motion holds meaning. Through our video coverage,
                            we capture not just what happened, but how it felt. Let us turn your event into a timeless
                            film you’ll want to relive again and again.
                        </Text>

                        {/* SMART BOOK NOW BUTTON */}
                        <Button
                            component="a"
                            href={buttonConfig.href}
                            target={buttonConfig.target}
                            rel={buttonConfig.rel}
                            variant="outline"
                            color="white"
                            size="md"
                            radius="md"
                        >
                            BOOK NOW
                        </Button>
                    </Grid.Col>

                    {/* RIGHT SIDE – INCLUSION */}
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text fw={800} mt={60} mb={20} c="white" style={{
                            fontSize: "2.5rem"
                        }}>
                            INCLUSION
                        </Text>

                        <List spacing="xs" size="md">
                            <List.Item>Including 1 Videographer.</List.Item>
                            <List.Item>Video Highlights Coverage.</List.Item>
                            <List.Item>MTV Event Highlights Video Edited.</List.Item>
                            <List.Item>Uploading video thru Google Drive within 1–2 weeks working day.</List.Item>
                            <List.Item>Transportation fee is included.</List.Item>
                            <List.Item>Additional 1k for succeeding hours.</List.Item>
                            <List.Item>Good for first starting 2 hours.</List.Item>
                            <List.Item>With BIR Original Receipt Invoice.</List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}

export default VideoPricing;