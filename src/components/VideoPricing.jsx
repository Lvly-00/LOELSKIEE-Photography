import React from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";

function PhotoPricing() {
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

export default PhotoPricing;
