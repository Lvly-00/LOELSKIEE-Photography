import React from "react";
import { Container, Text, Title, Button, Stack } from "@mantine/core";
import HeroImg from "../assets/images/hero-bg.jpg";

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
                margin: "4rem 0 0 0",
                fontFamily: "'Sora', sans-serif"
            }}
        >
            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1 }} />

            <Container style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                <Stack spacing="lg" align="center">
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: "1rem",
                            fontWeight: 600,
                            letterSpacing: "2px",
                            textTransform: "uppercase"
                        }}
                    >
                        BOOK YOUR CONSULTATION NOW
                    </Text>

                    <Title
                        style={{
                            color: "#fff",
                            fontSize: "clamp(2rem, 4vw, 3rem)", 
                            fontWeight: 800,
                            lineHeight: 1.1,
                        }}
                    >
                        <span style={{ color: "#FFB700" }}>ARE YOU READY</span> TO GET STARTED<br />
                        TELLING YOUR STORY?
                    </Title>

                    {/* Standardized Button Size */}
                    <Button
                        radius="xl"
                        size="xl"
                        style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            fontWeight: 800,
                            height: "clamp(2.5rem, 4vw, 3.5rem)",       
                            padding: "0 clamp(1rem, 4vw, 2rem)",        
                            fontSize: "clamp(0.875rem, 2vw, 1rem)",      
                            marginTop: "1rem"
                        }}
                        onClick={() => window.open("https://www.facebook.com/Loelskieez", "_blank")}
                    >
                        SEND A MESSAGE
                    </Button>

                </Stack>
            </Container>
        </section>
    );
};

export default HeroSection2;