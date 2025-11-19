import React from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";

function SDEPricing() {
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
                            SAME DAY EDIT COVERAGE
                        </Text>

                        <Text fw={800} mb={20} c="white" style={{
                            fontSize: "2.5rem"
                        }}>
                            ₱44,999
                        </Text>

                        <Text size="md" mb={25} style={{ maxWidth: 350, lineHeight: 1.6 }}>
                            Your best moments deserve to be remembered instantly. Our Same Day
                            Edit turns your photos and videos into a cinematic story — capturing
                            the emotion of today, for you to relive before the day even ends.
                        </Text>

                        <Button
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
