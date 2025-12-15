import React from "react";
import { Container, Grid, Image, Text, Title, Paper, Stack, Group, Divider, Box } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconMail } from "@tabler/icons-react";
import Reel from "../assets/images/VideoReel.png";  // should be a video

export default function StudioParagraphSection() {
    return (
        <Box
            style={{
                padding: "clamp(4rem, 8vw, 6rem) 0", // Uniform Padding
                fontFamily: "'Sora', sans-serif"
            }}
        >
            <Container size="lg">
                {/* TOP TEXT SECTION */}
                <Grid justify="space-between" align="start" gutter="xl">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title
                            order={2}
                            style={{
                                lineHeight: 1.3,
                                fontWeight: 300,
                                fontSize: "clamp(1.5rem, 3vw, 2.5rem)" // Responsive Heading
                            }}
                        >
                            A photo is more than just an image — it’s a story, a feeling, and a
                            moment that <span style={{ fontWeight: 600 }}>lasts forever.</span>
                        </Title>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Text
                            c="black.3"
                            style={{
                                lineHeight: 1.8,
                                fontSize: "clamp(0.9rem, 1.1vw, 1rem)" // Uniform Body Text
                            }}
                        >
                            Investing in professional photography is one of the best ways to
                            make a lasting impression. Whether it’s for personal branding,
                            events, or creative projects, high-quality photos help you stand
                            out and tell your story with clarity and confidence.
                            <br />
                            <br />
                            Your photos reflect more than moments — they capture emotion,
                            personality, and purpose. What story do you want your images to
                            tell?
                        </Text>
                    </Grid.Col>
                </Grid>


                {/* WHY CAPTURE TITLE */}
                <Box style={{ textAlign: "center", marginTop: "clamp(4rem, 6vw, 6rem)" }}>
                    <Title
                        order={1}
                        fw={700}
                        style={{
                            letterSpacing: 1,
                            fontSize: "clamp(2.5rem, 5vw, 4rem)" // Standardized Section Title
                        }}
                    >

                        WHY CAPTURE YOUR <br /> MOMENTS WITH US?
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



                {/* FEATURE CARDS */}
                <Grid
                    mt={50}
                    gutter={20}
                    align="stretch"
                >
                    {/* ---- Card 1 ---- */}
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <Paper
                            p="xl"
                            radius="0px 0px 60px 0px"
                            style={{ background: "#000000ff", height: "100%" }}
                        >
                            <Stack gap={10}>
                                <Title order={3} c="white" style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                                    Creative Precision
                                </Title>
                                <Text size="md" c="white">
                                    Great photos don’t happen by chance. From composition to
                                    post-editing, I focus on every detail to make sure each image
                                    reflects quality, emotion, and style that fits your vision.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>

                    {/* ---- Card 2 ---- */}
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <Paper p="xl" radius="md" style={{ background: "#000000ff", height: "100%" }}>
                            <Stack gap={10}>
                                <Title order={3} c="white" style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                                    Expertise
                                </Title>
                                <Text size="md" c="white">
                                    With years of hands-on experience, I’ve developed the skill to
                                    capture authentic and meaningful moments — whether it’s
                                    portraits, events, or lifestyle shoots. Every click is guided
                                    by creativity and purpose.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>

                    {/* ---- Card 3 ---- */}
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <Paper
                            p="xl"
                            radius="60px 0px 0px 0px"
                            style={{
                                background: "#000000ff",
                                height: "100%",
                            }}
                        >
                            <Stack gap={10}>
                                <Title order={3} c="white" style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                                    Seamless Process
                                </Title>
                                <Text size="md" c="white">
                                    From planning to final delivery, I ensure a smooth and
                                    stress-free experience. Enjoy a guided workflow that brings
                                    your vision to life with clarity and ease.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}
