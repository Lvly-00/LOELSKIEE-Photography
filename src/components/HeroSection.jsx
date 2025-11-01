import React from "react";
import { Container, Image, Text, Title } from "@mantine/core";
import HeroBanner from "../assets/images/HERO-SECTION.png";

const HeroSection = () => {
    return (
        <>
            {/* ✅ BLACK TOP SECTION */}
            <section
                style={{
                    marginTop: "60px",
                    backgroundColor: "#000",
                    paddingTop: "6rem",
                    paddingBottom: "10rem", // smaller so the image doesn't get pushed too low
                    color: "#fff",
                    position: "relative",
                }}
            >
                {/* ✅ TEXT BLOCK */}
                <Container
                    size="xl"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                    }}
                >
                    <div>
                        <Title
                            order={1}
                            style={{
                                fontSize: "clamp(3.5rem, 6vw, 6rem)",
                                fontWeight: 900,
                                lineHeight: 1,
                                color: "#fff",

                            }}
                        >
                            LOELSKIEE
                        </Title>

                        <Title
                            order={1}
                            style={{
                                fontSize: "clamp(3.5rem, 6vw, 6rem)",
                                fontWeight: 900,
                                lineHeight: 1,
                                marginTop: "0.5rem",
                                color: "#fff",

                            }}
                        >
                            PHOTOGRAPHY
                        </Title>
                    </div>

                    <Text
                        style={{
                            maxWidth: "300px",
                            fontSize: "0.9rem",
                            lineHeight: 1.4,
                            opacity: 0.9,
                            textAlign: "right",
                        }}
                    >
                        From weddings to JS proms and every special occasion in between,
                        Loelskiee Photography captures each moment with creativity and passion.
                        We offer a wide range of photography and video services to make every memory
                        last a lifetime
                    </Text>
                </Container>

                {/* ✅ IMAGE — much higher now */}
                <Container size="xl" style={{ position: "relative" }}>
                    <Image
                        src={HeroBanner}
                        alt="Featured"
                        style={{
                            width: "100%",
                            borderRadius: "18px",
                            objectFit: "cover",
                            position: "relative",
                            top: ".5rem",     
                            marginBottom: "-20rem", // ✅ only half overlaps
                            zIndex: 10,
                        }}
                    />
                </Container>
            </section>

            {/* ✅ WHITE SECTION BELOW (reveals bottom half of image) */}
            <div style={{ height: "8rem", background: "#fff" }}></div>
        </>
    );
};

export default HeroSection;
