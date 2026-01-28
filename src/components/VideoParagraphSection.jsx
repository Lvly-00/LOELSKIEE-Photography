import React, { useState } from "react";
import {
    Container,
    Grid,
    Text,
    Title,
    Paper,
    Stack,
    Group,
    Divider,
    AspectRatio,
} from "@mantine/core";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconMail,
} from "@tabler/icons-react";

/* ================================
   Reusable Copy Icon (Tabler)
================================ */
const CopyIcon = ({ value, label }) => {
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
                aria-label={label}
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

export default function VideoParagraphSection() {
    return (
        <div style={{ backgroundColor: "#1E1E1E", padding: "80px 20px" }}>
            <Container size="lg">
                {/* TOP TEXT SECTION */}
                <Grid justify="space-between" align="start">
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Title
                            order={2}
                            style={{
                                color: "white",
                                lineHeight: 1.3,
                                fontWeight: 300,
                                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                            }}
                        >
                            "We capture real emotions and turn every moment into a{" "}
                            <span style={{ fontWeight: 700 }}>timeless</span> visual experience."
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
                            Professional videography turns ordinary moments into unforgettable
                            stories. From personal milestones to brand showcases, every shot
                            and frame is crafted to highlight emotion, atmosphere, and
                            connection.
                            <br />
                            <br />
                            A great video doesn’t just show what happened — it lets people feel
                            it. What experience do you want to share?
                        </Text>
                    </Grid.Col>
                </Grid>

                <Container size="xl" style={{ marginTop: 90 }}>
                    <Grid align="center" gutter="xl">
                        {/* LEFT — VIDEO */}
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1140471464820696"
                                    width="100%"
                                    height="100%"
                                    style={{ border: "none" }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                />
                            </AspectRatio>
                        </Grid.Col>

                        {/* RIGHT — TEXT + ICONS */}
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Stack gap="lg" h="100%" justify="space-between">
                                {/* TITLE + TEXT */}
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

                                {/* ICONS */}
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



                                    {/* Copy email */}
                                    <CopyIcon
                                        value="loelskiee@gmail.com"
                                        label="Copy email address"
                                    />

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

                {/* WHY CAPTURE */}
                <div style={{ textAlign: "center", marginTop: 90 }}>
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
                </div>

                {/* FEATURE CARDS */}
                <Grid mt={40} gutter={20} justify="center" align="stretch">
                    {[
                        {
                            title: "Creative Precision",
                            text:
                                "Great photos don’t happen by chance. From composition to post-editing, every detail is crafted to reflect emotion and quality.",
                            radius: "0px 0px 60px 0px",
                        },
                        {
                            title: "Expertise",
                            text:
                                "Years of hands-on experience capturing authentic and meaningful moments with creativity and purpose.",
                            radius: "md",
                        },
                        {
                            title: "Seamless Process",
                            text:
                                "From planning to final delivery, enjoy a smooth and stress-free workflow that brings your vision to life.",
                            radius: "60px 0px 0px 0px",
                        },
                    ].map((card, index) => (
                        <Grid.Col key={index} span={{ base: 12, sm: 4 }}>
                            <Paper
                                p="xl"
                                radius={card.radius}
                                style={{ background: "#F4F1EC", height: "100%" }}
                            >
                                <Stack gap={10}>
                                    <Title order={3} fw={700} fz="1.25rem">
                                        {card.title}
                                    </Title>
                                    <Text size="md" c="dark">
                                        {card.text}
                                    </Text>
                                </Stack>
                            </Paper>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
