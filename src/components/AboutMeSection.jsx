import React from "react";
import { Container, Grid, Text, Image } from "@mantine/core";
import PlaceholderImg from "../assets/images/AboutMe-Profile.png";

const AboutMeSection = () => {
  return (
    <section
      style={{
        padding: "3rem 0 6rem 0",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      {/* ✅ TOP LABEL + LINE */}
      <Container size="xl" style={{ position: "relative" }}>
        {/* 2024 Badge */}
        <div
          style={{
            border: "2px solid #000",
            padding: "0.4rem 1.5rem",
            borderRadius: "40px",
            display: "inline-block",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          2024
        </div>

        {/* Top Black Line */}
        <div
          style={{
            height: "6px",
            background: "#000",
            width: "55%",
            marginTop: "1rem",
          }}
        ></div>
      </Container>

      {/* ✅ MAIN ABOUT ME SECTION */}
      <Container size="xl" style={{ paddingLeft: 0 }}>
        <Grid align="center" gutter={50}>

          {/* ✅ LEFT — BLACK ABOUT ME CARD (STICKS TO LEFT) */}
          <Grid.Col
            span={{ base: 12, md: 7 }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                background: "#000",
                padding: "3rem",
                paddingLeft: "8rem",
                borderRadius: "30px",
                color: "#fff",
                width: "50%",
                position: "absolute",
                left: "-20px",
                height: "100%",       
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                fw={800}
                style={{
                  fontSize: "5rem",
                  marginBottom: ".5rem",
                }}
              >
                ABOUT ME
              </Text>

              <Text
                style={{
                  fontSize: "1.5rem",
                  lineHeight: 2,
                  opacity: 0.9,
                  maxWidth: "90%",
                }}
              >
                Hi, I'm Loel Ludovice, a freelance photographer based in Manila.
                I've been capturing moments professionally since 2024, but my
                passion for photography began during the pandemic—when I found
                beauty in stillness and everyday life. I've grown from humble
                beginnings to working with over 200 clients. My style leans toward
                natural, candid, and storytelling visuals, with a focus on authentic
                emotion and detail. Whether it's portraits, events, or street scenes,
                I aim to create images that speak and connect.
              </Text>
            </div>
          </Grid.Col>

          {/* ✅ RIGHT — IMAGE */}
          <Grid.Col
            span={{ base: 12, md: 5 }}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Image
              src={PlaceholderImg}
              alt="Photographer"

            />
          </Grid.Col>

        </Grid>
      </Container>

      {/* ✅ BOTTOM LINE + PHOTOGRAPHER + STYLE BUTTON */}
      <Container size="xl" style={{ marginTop: "4rem" }}>
        {/* Bottom Black Line */}
        <div
          style={{
            height: "6px",
            background: "#000",
            width: "30%",
            marginBottom: "2rem",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* PHOTOGRAPHER TEXT */}
          <Text
            fw={900}
            style={{
              fontSize: "3rem",
              letterSpacing: "2px",
            }}
          >
            PHOTOGRAPHER
          </Text>

          {/* STYLE OUTLINE BUTTON */}
          <div
            style={{
              border: "2px solid #000",
              padding: "0.5rem 2rem",
              borderRadius: "40px",
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            STYLE
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMeSection;
