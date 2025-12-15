import React from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";

function PhotoPricing() {

    // 1. Define details
    const recipientEmail = "loelskiee@gmail.com";
    const emailSubject = "Booking Inquiry: Photo Coverage Package (₱4,999)";
    const emailBody = `Hi Loelskiee Photography Team,

I would like to inquire about booking the Photo Coverage package (₱4,999).

Here are my event details:
Date: 
Time: 
Location: 
Type of Event: 

Please let me know if this date is available.

Best regards,`;

    // 2. Create a "Gmail-Specific" Link
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;



    return (
        <Box bg="#1E1E1E" pt={80} pb={120} c="white">
            <Container size="lg">
                <Box ta="center" mb={50}>
                    <Title order={1} c="white" fw={700} style={{ letterSpacing: 1 }}>
                        PRICING
                    </Title>
                    <div style={{ width: 180, height: 4, background: "#5D6E5C", margin: "15px auto 0", borderRadius: 2 }} />
                </Box>

                <Divider size="xl" color="#ffffffff" mb={40} />

                <Grid gutter={30} p="0 30px" >
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" fw={400} mb={30} c="white">PHOTO COVERAGE</Text>
                        <Text fw={800} mb={20} c="white" style={{ fontSize: "2.5rem" }}>₱4,999</Text>
                        <Text size="md" mb={25} style={{ maxWidth: 350, lineHeight: 1.6 }}>
                            Photos tell stories that words can’t. Our coverage captures real
                            moments and emotions, turning every occasion into lasting memories.
                        </Text>

                        {/* OPTION 1: Button opens Gmail in a new tab (Guaranteed to work) */}
                        <Button
                            component="a"
                            href={gmailLink}
                            target="_blank" // Opens in new tab
                            rel="noopener noreferrer"
                            variant="outline"
                            color="white"
                            size="md"
                            radius="md"
                        >
                            BOOK NOW
                        </Button>


                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text fw={800} mt={60} mb={20} c="white" style={{ fontSize: "2.5rem" }}>INCLUSION</Text>
                        <List spacing="xs" size="md">
                            <List.Item>Including 1 Photographer.</List.Item>
                            <List.Item>Photo Highlights Event Coverage.</List.Item>
                            <List.Item>Unlimited shots + Enhancing photos.</List.Item>
                            <List.Item>Uploading photos thru Google Drive within 1–3 working days.</List.Item>
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