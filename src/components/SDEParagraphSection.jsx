import React, { useState } from "react";
import {
    Container,
    Box,
    Grid,
    AspectRatio,
    Text,
    Title,
    Paper,
    Stack,
    Group,
    Divider,
} from "@mantine/core";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconMail,
} from "@tabler/icons-react";

// Reusable CopyMailIcon component
const CopyMailIcon = ({ value }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div style={{ position: "relative", display: "inline-flex" }}>
            <button
                type="button"
                onClick={copyToClipboard}
                aria-label="Copy email address"
                style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                }}
            >
                <IconMail size={28} color="white" />
            </button>

            {copied && (
                <Text
                    size="xs"
                    style={{
                        position: "absolute",
                        top: "-1.6rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(0,0,0,0.8)",
                        color: "#fff",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        zIndex: 10,
                    }}
                >
                    Email copied!
                </Text>
            )}
        </div>
    );
};

export default function SDEParagraphSection() {
    return (
        <Box
            style={{
                backgroundColor: "#1E1E1E",
                padding: "clamp(4rem, 8vw, 6rem) 0",
                fontFamily: "'Sora', sans-serif",
            }}
        >
            <Container size="lg">
                {/* TOP TEXT SECTION */}
                <Grid justify="space-between" align="start" gutter="xl">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title
                            order={2}
                            style={{
                                color: "white",
                                lineHeight: 1.3,
                                fontWeight: 300,
                                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                            }}
                        >
                            A photo captures a moment, a video brings it to life — together,
                            they tell stories that{" "}
                            <span style={{ fontWeight: 700 }}>lasts forever.</span>
                        </Title>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Text
                            c="gray.3"
                            style={{
                                lineHeight: 1.8,
                                fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
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

                <Container size="xl" style={{ marginTop: 90 }}>
                    <Grid align="center" gutter="xl">
                        {/* LEFT — VIDEO */}
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1287318512927223%26rdid%3DgKlx6nmsKbtVaWQS&width=500&show_text=false&height=281&appId"
                                    width="100%"
                                    height="100%"
                                    data-autoplay="true"
                                    data-show-captions="false"
                                    style={{
                                        border: "none",
                                        overflow: "hidden",
                                    }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </AspectRatio>
                        </Grid.Col>

                        {/* RIGHT — TEXT + ICONS */}
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Stack gap="lg" h="100%" justify="space-between">
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

                                        <Text c="gray.4" size="md">
                                            From events to creative projects, our videography brings
                                            your story to life with motion, sound, and emotion that
                                            leave a lasting impression.
                                        </Text>
                                    </Stack>
                                </Group>

                                {/* ICONS AT THE BOTTOM */}
                                <Group spacing="md">
                                    <a
                                        href="https://www.facebook.com/Loelskieez"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                    >
                                        <IconBrandFacebook
                                            size={28}
                                            color="white"
                                            style={{ cursor: "pointer" }}
                                        />
                                    </a>

                                    <CopyMailIcon value="loelskiee@gmail.com" />

                                    <a
                                        href="https://www.instagram.com/loelskieez"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                    >
                                        <IconBrandInstagram
                                            size={28}
                                            color="white"
                                            style={{ cursor: "pointer" }}
                                        />
                                    </a>
                                </Group>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Container>

                {/* WHY CAPTURE TITLE */}
                <Box style={{ textAlign: "center", marginTop: "clamp(4rem, 6vw, 6rem)" }}>
                    <Title
                        order={1}
                        c="white"
                        fw={700}
                        style={{
                            letterSpacing: 1,
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
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
                <Grid mt={50} gutter={20} align="stretch">
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
                                <Title order={3} style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                                    Creative Precision
                                </Title>
                                <Text size="md" c="dark">
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
                                <Title order={3} style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                                    Expertise
                                </Title>
                                <Text size="md" c="dark">
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
                                <Title order={3} style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                                    Seamless Process
                                </Title>
                                <Text size="md" c="dark">
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
