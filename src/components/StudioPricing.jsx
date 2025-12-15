import React from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";

function StudioPricing() {
    return (
        <Box pt={80} pb={120}>
            <Container size="lg">

                {/* HEADER */}
                <Box ta="center" mb={50}>
                    <Title order={1} fw={700} style={{ letterSpacing: 1 }}>
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

                {/* ----------------------------------------------------- */}
                {/* PHOTO BOOTH – ₱4,999 */}
                {/* ----------------------------------------------------- */}
                <Grid gutter={30} p="0 30px" mb={80}>
                    {/* LEFT */}
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" mb={30}>PHOTO BOOTH</Text>

                        <Title order={2} fw={800} mb={20} style={{ fontSize: "2.5rem" }}>
                            ₱4,999
                        </Title>

                        <Text size="md" mb={25} style={{ maxWidth: 350, lineHeight: 1.6 }}>
                            Get unlimited high-quality portraits and instant memories with our complete
                            photo booth package, handled by a professional photographer.
                        </Text>

                        <Button variant="outline" color="black" radius="md">
                            BOOK NOW
                        </Button>
                    </Grid.Col>

                    {/* RIGHT */}
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
                            PACKAGE
                        </Title>

                        <List spacing="xs" size="md">
                            <List.Item>Complete Photo Booth Experience.</List.Item>
                            <List.Item>2 Hours of Unlimited Portrait Session.</List.Item>
                            <List.Item>Capture as many high-quality portraits as you like.</List.Item>
                            <List.Item>All edited images delivered via Google Drive.</List.Item>
                            <List.Item>Includes 1 professional photographer.</List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
                <Divider size="xl" color="#000000ff" mb={40} />


                {/* ----------------------------------------------------- */}
                {/* PHOTO STUDIO – ₱7,999 */}
                {/* ----------------------------------------------------- */}
                <Grid gutter={30} p="0 30px" mb={80}>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" mb={30}>PHOTO STUDIO</Text>

                        <Title order={2} fw={800} mb={20} style={{ fontSize: "2.5rem" }}>
                            ₱7,999
                        </Title>

                        <Text size="md" mb={25} style={{ maxWidth: 350, lineHeight: 1.6 }}>
                            Enjoy a full studio-style booth setup with unlimited portraits,
                            professional lighting, and quick delivery—perfect for events that want
                            polished, high-quality photos.
                        </Text>

                        <Button variant="outline" color="black" radius="md">
                            BOOK NOW
                        </Button>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
                            PACKAGE
                        </Title>

                        <List spacing="xs" size="md">
                            <List.Item>Complete Studio Booth Experience.</List.Item>
                            <List.Item>2 Hours of Unlimited Portrait Session.</List.Item>
                            <List.Item>Capture as many portraits as you like.</List.Item>
                            <List.Item>All edited images delivered via Google Drive.</List.Item>
                            <List.Item>Includes 1 professional photographer.</List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
                <Divider size="xl" color="#000000ff" mb={40} />


                {/* ----------------------------------------------------- */}
                {/* STUDIO BOOTH – ₱12,999 */}
                {/* ----------------------------------------------------- */}
                <Grid gutter={30} p="0 30px" mb={80}>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" mb={30}>STUDIO BOOTH</Text>

                        <Title order={2} fw={800} mb={20} style={{ fontSize: "2.5rem" }}>
                            ₱12,999
                        </Title>

                        <Text size="md" mb={25} style={{ maxWidth: 350, lineHeight: 1.6 }}>
                            A complete studio booth experience with unlimited portraits,
                            enhanced 4R photos, and quick digital delivery—handled by a
                            professional photographer and editor.
                        </Text>

                        <Button variant="outline" color="black" radius="md">
                            BOOK NOW
                        </Button>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
                            PACKAGE
                        </Title>

                        <List spacing="xs" size="md">
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


                {/* ----------------------------------------------------- */}
                {/* LIVE FEED BROADCAST – ₱79,999 */}
                {/* ----------------------------------------------------- */}
                <Grid gutter={30} p="0 30px">
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" mb={30}>LIVE FEED BROADCAST</Text>

                        <Title order={2} fw={800} mb={20} style={{ fontSize: "2.5rem" }}>
                            ₱79,999
                        </Title>

                        <Text size="md" mb={25} style={{ maxWidth: 350, lineHeight: 1.6 }}>
                            Experience seamless live feed broadcast with a full multi-camera
                            setup and a professional team ensuring smooth real-time coverage.
                        </Text>

                        <Button variant="outline" color="black" radius="md">
                            BOOK NOW
                        </Button>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
                            PACKAGE
                        </Title>

                        <List spacing="xs" size="md">
                            <List.Item>Complete Live Feed Broadcast Experience.</List.Item>
                            <List.Item>3-Man Camera Setup.</List.Item>
                            <List.Item>Smooth & Reliable Coverage from Start to End.</List.Item>
                            <List.Item>Includes 3 Professional Videographers & 1 Main Live Feed Director.</List.Item>
                        </List>
                    </Grid.Col>
                </Grid>

            </Container>
        </Box>
    );
}

export default StudioPricing;
