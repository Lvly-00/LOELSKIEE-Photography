import React from "react";
import { Container, Grid, Text, Button, Image } from "@mantine/core";
import PlaceholderImg from "../assets/images/Studio.jpg"; // replace with your actual photo

const StudioIntroSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#102E50",
        padding: "4rem 0",
        color: "#fff",
      }}
    >
      <Container size="lg">
        <Grid align="center">
          {/* Left - Image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={PlaceholderImg}
              alt="Studio Preview"
              radius="sm"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "480px",
                objectFit: "cover",
                // borderRadius: "8px",
              }}
            />
          </Grid.Col>

          {/* Right - Text Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                paddingLeft: "1rem",
              }}
            >
              <Text
                fw={700}
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                  lineHeight: 1.3,
                  color: "#ffffff",
                }}
              >
                We Are A Dedicated Photography Studio Committed To Capturing
              </Text>

              <Text
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.3rem)",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                }}
              >
                Beautiful Moments In Your Life With Sincerity And Authenticity.
              </Text>

              <Button
                variant="outline"
                color="white"
                radius="xs"
                size="md"
                style={{
                  width: "fit-content",
                  borderColor: "#fff",
                  color: "#fff",
                  fontWeight: 500,
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#fff";
                  e.target.style.color = "#0E2369";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#fff";
                }}
              >
                GET IN TOUCH
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default StudioIntroSection;
