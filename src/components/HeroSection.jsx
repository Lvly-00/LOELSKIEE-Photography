import React from "react";
import { Container, Image, Text, Title } from "@mantine/core";
import HeroBanner from "../assets/images/hero-bg.jpg"; // featured photo

const HeroSection = () => {
    return (
        <section
            style={{
                backgroundColor: "#F5F1E8", // same tone as reference
                paddingTop: "6rem",
                paddingBottom: "4rem",
                textAlign: "center",
                fontFamily: "'Poppins', 'Inter', sans-serif",
                color: "#102E50",
            }}
        >
            <Container size="lg">
                {/* Studio Name */}
                <Title
                    order={1}
                    style={{
                        fontSize: "clamp(4rem, 9vw, 9rem)",
                        fontWeight: 900,
                        letterSpacing: "1px",
                        color: "#102E50",
                    }}
                >
                    LOELSKIEE
                </Title>
                {/* Description */}
                <Text
                    style={{
                        fontSize: "2rem",
                        maxWidth: "850px",
                        margin: "0 auto 2rem auto",
                        lineHeight: 1.7,
                        color: "#102E50",
                        textTransform: "uppercase",
                        fontWeight: 500,
                    }}
                >
                    “Capture the moment, Relive the memory”



                </Text>
                {/* Hero Image */}
                <div
                    style={{
                        overflow: "hidden",
                        // boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                >
                    <Image
                        src={HeroBanner}
                        alt="Featured Studio Work"
                        style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "500px",
                            objectFit: "cover",
                        }}
                    />
                </div>


            </Container>

            {/* Responsive styling */}
            <style>
                {`
          @media (max-width: 768px) {
            section {
              padding-top: 4rem !important;
            }
            h1 {
              font-size: 2.5rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
          }
        `}
            </style>
        </section>
    );
};

export default HeroSection;
