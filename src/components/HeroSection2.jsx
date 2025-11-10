import React from "react";
import { Container, Text, Title, Button, Stack, Center } from "@mantine/core";
import HeroImg from "../assets/images/hero-bg.jpg"; // replace with your image path

const HeroSection2 = () => {
    return (
        <section
            style={{
                position: "relative",
                backgroundImage: `url(${HeroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "8rem 0",
            }}
        >
            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1,
                }}
            />

            <Container
                style={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                }}
            >
                <Stack spacing="sm" align="center">
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                            fontWeight: 400,
                            marginBottom: "1rem"
                        }}
                    >
                        BOOK YOUR CONSULTATION NOW
                    </Text>

                    <Title
                        style={{
                            color: "#fff",
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                            fontWeight: 800,
                            lineHeight: 1.2,
                        }}
                    >
                        <span style={{ color: "#fbb03b" }}>  ARE YOU READY</span> TO GET STARTED
                        <br />
                        TELLING YOUR STORY?
                    </Title>

                    <Button
                        radius="xl"
                        size="clamp(2rem, 5vw, 3rem)"
                        style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            fontWeight: 700,
                            padding: "0.5rem 2rem",
                            fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                        }}
                    >
                        SEND A MESSAGE
                    </Button>
                </Stack>
            </Container>
        </section>
    );
};

export default HeroSection2;
