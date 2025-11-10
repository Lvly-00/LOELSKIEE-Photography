import React from "react";
import { Container, Grid, Text, Image } from "@mantine/core";
import PlaceholderImg from "../assets/images/AboutMe-Profile.png";

const AboutMeSection = () => {
  return (
    <section
      style={{
        padding: "2rem 0 6rem 0",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      {/* TOP LABEL + LINE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "5rem",
        }}
      >
        {/* LEFT — Badge */}
        <div
          style={{
            padding: "clamp(0.2rem, 1vw, 0.5rem) clamp(1.5rem, 5vw, 4.5rem)",
            border: "clamp(1px, 0.3vw, 3px) solid #000",
            borderRadius: "60px",
            fontWeight: 700,
            fontSize: "clamp(.5rem, 2.5vw, 3rem)",
            whiteSpace: "nowrap",
            marginLeft: "clamp(1rem, 5vw, 10rem)",
          }}
        >
          2024
        </div>


        {/* RIGHT — Line */}
        <div
          style={{
            height: "clamp(.5rem, 1.5vw, 2rem)",
            background: "#000",
            width: "70%",
          }}
        ></div>
      </div>

      {/* MAIN ABOUT ME SECTION */}
      <Container size="xl" style={{ paddingLeft: 0 }}>
        <Grid>
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
                paddingLeft: "10rem",
                borderRadius: "60px",
                color: "#fff",
                width: "70%",
                position: "absolute",
                left: "-50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                fw={800}
                style={{
                  fontSize: "clamp(0.5rem, 5vw, 7rem)",
                }}
              >
                ABOUT ME
              </Text>

              <Text
                style={{
                  fontSize: "clamp(0.5rem, 5vw, 1.5rem)",
                  lineHeight: 2,
                  opacity: 0.9,
                  maxWidth: "70%",
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

          {/* RIGHT — IMAGE (hidden on small screens) */}

          <Grid.Col
            span={{ base: 12, md: 4.5 }}
            offset={9}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Image
              src={PlaceholderImg}
              alt="Photographer"
              visibleFrom="xl"
              style={{
                width: "100%",          // take full width of container
                maxWidth: "24rem",      // maximum width
                height: "auto",         // maintain aspect ratio
                borderRadius: "20px",
                objectFit: "contain",   // contain the image within bounds
              }}
            />
          </Grid.Col>
        </Grid>
      </Container>

      {/* BOTTOM LINE + PHOTOGRAPHER + STYLE BUTTON */}
      {/* BOTTOM LINE + PHOTOGRAPHER + STYLE BUTTON */}
      <div
        style={{
          marginTop: "-6rem", // move it upward to overlap rectangle
          zIndex: 10,         // make sure it's above the rectangle
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "nowrap",
          }}
        >
          {/* LEFT — Line */}
          <div
            style={{
              height: "clamp(.5rem, 1.5vw, 2rem)",
              background: "#000",
              width: "30%",
            }}
          ></div>

          {/* CENTER — PHOTOGRAPHER TEXT */}
          <Text
            fw={900}
            style={{
              fontSize: "6rem",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
            }}
          >
            PHOTOGRAPHER
          </Text>

          {/* RIGHT — STYLE OUTLINE BUTTON */}
          <div
            style={{
              border: "3px solid #000",
              padding: "0.5rem 5rem",
              borderRadius: "60px",
              fontWeight: 700,
              fontSize: "3rem",
              whiteSpace: "nowrap",
            }}
          >
            STYLE
          </div>
        </div>
      </div>


    </section>
  );
};

export default AboutMeSection;
