import React from "react";
import { Container, Grid, Image, Text, Title, Paper, Stack, Group, Divider, AspectRatio } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconMail } from "@tabler/icons-react";
import Reel from "../assets/images/VideoReel.png";  // should be a video
import ReactPlayer from "react-player";


export default function VideoParagraphSection() {
    return (
        <div style={{ backgroundColor: "#1E1E1E", padding: "80px 20px" }}>
            <Container size="lg">
                {/* TOP TEXT SECTION */}
                <Grid justify="space-between" align="start">
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Title
                            order={2}
                            style={{ color: "white", lineHeight: 1.3, fontWeight: 300 }}
                        >
                            Our videos go beyond simple coverage — we capture real emotions,
                            tell your story, and turn every moment into a  <span style={{ fontWeight: 600 }}>timeless</span> visual experience.
                        </Title>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Text c="gray.3" size="sm" style={{ lineHeight: 1.7 }}>
                            Professional videography turns ordinary moments into unforgettable stories.
                            From personal milestones to brand showcases, every shot and frame is
                            crafted to highlight emotion, atmosphere, and connection.
                            <br />
                            <br />
                            A great video doesn’t just show what happened — it lets people feel it.
                            What experience do you want to share?
                        </Text>
                    </Grid.Col>
                </Grid>

                <Container size="xl" style={{ marginTop: 90 }}>
                    <Grid align="center" gutter="xl">

                        {/* LEFT — IMAGE */}
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <AspectRatio ratio={16 / 9}>
                                <ReactPlayer
                                    style={{ pointerEvents: "none" }}
                                    width='100%'
                                    height='100%'
                                    src="https://www.youtube.com/embed/Ymh0Zx5V9e4"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    playing={true}   // Autoplay
                                    muted={true}     // Muted (Required for autoplay)
                                    loop={true}      // Loop
                                    controls={false} // Hide pause/play buttons

                                    // YouTube Specific Config to remove UI clutter
                                    config={{
                                        youtube: {
                                            playerVars: {
                                                showinfo: 0,
                                                modestbranding: 1,
                                                rel: 0
                                            }
                                        }
                                    }}
                                />
                            </AspectRatio>
                        </Grid.Col>

                        {/* RIGHT — TEXT + ICONS */}
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Stack
                                gap="lg"
                                h="100%"
                                justify="space-between"
                            >

                                {/* TITLE + TEXT + DIVIDER */}
                                <Group align="flex-start">
                                    <Divider
                                        orientation="vertical"
                                        style={{
                                            borderLeft: "4px solid #6BB66B",
                                            height: "100%",
                                        }}
                                    />

                                    <Stack gap={4}>
                                        <Title order={1} c="white">
                                            HIGHLIGHT <br /> REEL
                                        </Title>

                                        <Text c="gray.4" size="sm">
                                            From events to creative projects, our videography brings your story
                                            to life with motion, sound, and emotion that leave a lasting impression.
                                        </Text>
                                    </Stack>
                                </Group>

                                {/* ICONS AT THE BOTTOM */}
                                <Group spacing="md">
                                    <IconBrandFacebook size={28} color="white" style={{ cursor: "pointer" }} />
                                    <IconBrandInstagram size={28} color="white" style={{ cursor: "pointer" }} />
                                    <IconMail size={28} color="white" style={{ cursor: "pointer" }} />
                                </Group>

                            </Stack>
                        </Grid.Col>


                    </Grid>
                </Container>

                {/* WHY CAPTURE TITLE */}
                <div style={{ textAlign: "center", marginTop: 90 }}>
                    <Title order={1} c="white" fw={700} style={{ letterSpacing: 1 }}>

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

                </div>



                {/* FEATURE CARDS */}
                <Grid
                    mt={40}
                    gutter={20}
                    justify="center"
                    align="stretch"
                    style={{ marginBottom: 40 }}
                >
                    {/* ---- Card 1 ---- */}
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <Paper
                            p="xl"
                            radius="0px 0px 60px 0px"
                            style={{
                                background: "#F4F1EC",
                                height: "100%",
                            }}
                        >
                            <Stack gap={10}>
                                <Title order={3} style={{ fontWeight: 700 }}>
                                    Creative Precision
                                </Title>
                                <Text size="sm" c="dark">
                                    Great photos don’t happen by chance. From composition to
                                    post-editing, I focus on every detail to make sure each image
                                    reflects quality, emotion, and style that fits your vision.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>

                    {/* ---- Card 2 ---- */}
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <Paper p="xl" radius="md" style={{ background: "#F4F1EC", height: "100%" }}>
                            <Stack gap={10}>
                                <Title order={3} style={{ fontWeight: 1200 }}>
                                    Expertise
                                </Title>
                                <Text size="sm" c="dark">
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
                                background: "#F4F1EC",
                                height: "100%",
                            }}
                        >
                            <Stack gap={10}>
                                <Title order={3} style={{ fontWeight: 700 }}>
                                    Seamless Process
                                </Title>
                                <Text size="sm" c="dark">
                                    From planning to final delivery, I ensure a smooth and
                                    stress-free experience. Enjoy a guided workflow that brings
                                    your vision to life with clarity and ease.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
}
