import React from "react";
import { Container, Image, Text, Title } from "@mantine/core";
import HeroBanner from "../assets/images/HERO-SECTION.png";

const HeroSection = () => {
    return (
        <>
            {/*  BLACK TOP SECTION */}
            <section
                style={{
                    backgroundColor: "#000",
                    paddingTop: "clamp(7rem, 15vw, 10rem)",
                    paddingBottom: "10rem",
                    color: "#fff",
                    position: "relative",
                }}
            >
                {/*  TEXT BLOCK */}
                <Container
                    className="hero-text-block"
                    size="xl"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap"
                    }}>

                    <div
                        style={{
                            flex: "1 1 100px",
                            minWidth: "250px",
                            textAlign: "left",
                        }}
                    >
                        <Title
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                                fontWeight: 900,
                                lineHeight: 1,
                                color: "#fff",
                            }}
                        >
                            LOELSKIEE
                        </Title>

                        <Title
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 6rem)",
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
                            flex: "1 1 100px",
                            minWidth: "200px",
                            maxWidth: "clamp(450px, 36%, 700px)",
                            fontSize: "clamp(0.7rem, 2vw, 1rem)",
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

                {/*  IMAGE */}
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
