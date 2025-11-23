import { Box, Grid, Stack, Text, Button, Image, Container } from "@mantine/core";
import Studio from "../assets/images/Studio.png";

export default function StudioSection() {
    return (
        <Box
            py={80}
            px={0}
            mt="4rem"
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                position: "relative",
            }}
        >
            {/* Grey Background (NOT centered) */}
            <Box
                bg="#EEEEEE"
                style={{
                    position: "absolute",
                    top: "42%",
                    left: 0,
                    right: 0,
                    height: 320,
                    zIndex: 0,
                }}
            />

            {/* Centered Content */}
            <Container size="xl" style={{ position: "relative", zIndex: 2 }}>
                <Grid gutter="7rem" align="center">

                    {/* IMAGE */}
                    <Grid.Col span={{ base: 12, md: 7.5 }}>
                        <Image
                            src={Studio}
                            alt="studio"
                            fit="cover"
                            height="auto"
                        />
                    </Grid.Col>

                    {/* RIGHT TEXT */}
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Stack >

                            {/* BIG TITLE */}
                            <Text
                                fw={900}
                                lh={0.9}
                                style={{
                                    fontSize: "clamp(48px, 10vw, 130px)",
                                    marginBottom: "1rem"
                                }}
                            >
                                STU <br /> DIO
                            </Text>

                            {/* DESCRIPTION */}
                            <Box style={{ maxWidth: 500, marginBottom: "2rem" }}>
                                <Text size="lg" c="black" maw={500}>
                                    We offer professional photobooth and studio services perfect for birthdays,
                                    weddings, corporate events, and more. Whether you want fun, candid shots
                                    or elegant studio portraits, our team provides high-quality photos,
                                    creative backdrops, and instant prints to make your memories last a
                                    lifetime.
                                </Text>
                            </Box>

                            {/* BUTTON */}
                            <Button
                                variant="outline"
                                radius="xl"
                                size="md"
                                color="black"
                                w="fit-content"
                                onClick={() => (window.location.href = "/studio")}
                            >
                                EXPLORE
                            </Button>

                        </Stack>
                    </Grid.Col>

                </Grid>
            </Container>
        </Box>
    );
}
