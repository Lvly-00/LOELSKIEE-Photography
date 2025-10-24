import React from "react";
import { Container, Title, Text, Image, Group } from "@mantine/core";
import AboutPhoto from "../assets/images/hero-bg.jpg"; // replace with your actual photo

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#F2F1EC",
        padding: "6rem 2rem",
        fontFamily: "'Poppins', 'Inter', sans-serif",
      }}
    >
      <Container
        size="xl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Image */}
        <div
          style={{
            flex: "1 1 350px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <Image
            src={AboutPhoto}
            alt="Photographer Loel Ludovice"
            radius="md"
            style={{
              maxWidth: "400px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          /> */}
        </div>

        {/* Right: Text */}
        <div
          style={{
            flex: "1 1 450px",
            color: "#0E2369",
          }}
        >
          <Title
            order={2}
            style={{
              fontWeight: 700,
              fontSize: "2.5rem",
              marginBottom: "1rem",
              letterSpacing: "-0.5px",
            }}
          >
            About the Photographer
          </Title>

          <Text
            size="lg"
            style={{
              color: "#333",
              lineHeight: 1.8,
              fontWeight: 400,
              fontSize: "1.05rem",
            }}
          >
            Hi, I’m <strong>Loel Ludovice</strong>, a freelance photographer based in
            Manila. I’ve been capturing moments professionally since 2024, but my
            passion for photography began during the pandemic—when I found beauty in
            stillness and everyday life. Since then, I’ve grown from humble beginnings
            to working with over <strong>200 clients</strong>.
            <br />
            <br />
            My style leans toward natural, candid, and storytelling visuals, with a
            focus on authentic emotion and detail. Whether it’s portraits, events, or
            street scenes, I aim to create images that speak and connect.
          </Text>
        </div>
      </Container>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding: 4rem 1.5rem !important;
            }

            h2 {
              font-size: 2rem !important;
              text-align: center !important;
            }

            div[style*="450px"] {
              text-align: center !important;
            }

            div[style*="350px"] {
              margin-bottom: 2rem !important;
            }

            p {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
