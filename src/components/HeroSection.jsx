import React from "react";
import { Container, Image, Text, Title, Box } from "@mantine/core";
import HeroBanner from "../assets/images/HERO-SECTION.png";

const HeroSection = () => {
    return (
        <>
            {/* BLACK TOP SECTION */}
            <section
                style={{
                    backgroundColor: "#000000",
                    paddingTop: "clamp(6rem, 12vw, 9rem)", 
                    paddingBottom: "10rem", 
                    color: "#fff",
                    fontFamily: "'Sora', sans-serif",
                }}
            >
                {/* TEXT BLOCK */}
                <Container size="xl">
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            flexWrap: "wrap",
                            gap: "2rem",
                        }}
                    >
                        <div style={{ flex: "1 1 300px" }}>
                            <Title
                                style={{
                                    fontSize: "clamp(3rem, 7vw, 6rem)", 
                                    fontWeight: 900,
                                    lineHeight: 0.9,
                                    color: "#fff",
                                    letterSpacing: "-2px",
                                }}
                            >
                                LOELSKIEE
                                <br />
                                PHOTOGRAPHY
                            </Title>
                        </div>

                        <Text
                            style={{
                                flex: "1 1 300px",
                                maxWidth: "600px",
                                fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", 
                                lineHeight: 1.6,
                                opacity: 0.8,
                                textAlign: "right", 
                            }}
                        >
                            From weddings to JS proms and every special occasion in between,
                            Loelskiee Photography captures each moment with creativity and passion.
                            We offer a wide range of photography and video services to make every memory
                            last a lifetime.
                        </Text>
                    </Box>
                </Container>

                {/*  IMAGE */}
                <Container size="xl" style={{ position: "relative" }}>
                    <Image
                        src={HeroBanner}
                        alt="Featured"
                        fetchpriority="high"
                        style={{
                            width: "100%",
                            borderRadius: "18px",
                            objectFit: "cover",
                            position: "relative",
                            top: ".5rem",
                            marginBottom: "clamp(-15rem, -15vw, -20rem)",
                            zIndex: 10,
                        }}
                    />
                </Container>
            </section>

            {/*  WHITE SECTION BELOW */}
            <div style={{ height: "8rem", background: "#fff" }}></div>
        </>
    );
};

export default HeroSection;
