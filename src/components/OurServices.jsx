import React from "react";
import { Container, Text, SimpleGrid, Divider, List, Group } from "@mantine/core";

const services = [
  {
    title: "Photo Coverage",
    price: "₱15,000",
    inclusions: [
      "Unlimited shots (edited + raw)",
      "2 professional photographers",
      "USB copy of all photos",
      "8x10 printed album (20 pages)",
    ],
  },
  {
    title: "Video Coverage",
    price: "₱18,000",
    inclusions: [
      "Full event coverage",
      "1 videographer + assistant",
      "Edited highlight video (3–5 mins)",
      "Full-length raw footage copy",
    ],
  },
  {
    title: "Photo & Video Coverage",
    price: "₱28,000",
    inclusions: [
      "2 photographers + 2 videographers",
      "Unlimited photos (edited + raw)",
      "Full event video coverage",
      "Edited highlight video + printed album",
    ],
  },
  {
    title: "Same Day Edit",
    price: "₱10,000",
    inclusions: [
      "3–5 minute cinematic edit",
      "Edited during the event",
      "Playback setup during reception",
      "Final digital copy after event",
    ],
  },
];

export default function OurServices() {
  return (
    <section
      style={{
        padding: "6rem 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container size="lg">
        {/* Section Heading */}
        <h1
          align="left"
          style={{
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 8rem)",
            textTransform: "uppercase",
            color: "#000",
            marginBottom: ".5rem",
            letterSpacing: "1.5px",
          }}
        >
          Our Services
        </h1>

        <Text
          align="left"
          style={{
            maxWidth: "720px",
            color: "#111",
            fontSize: "1.5rem",
            marginBottom: "3.5rem",
            lineHeight: 1.6,
          }}
        >
          We are a dedicated photography studio focused on capturing authentic
          and beautiful moments with artistic precision and sincerity.
        </Text>

        {/* Services Grid */}
        <SimpleGrid
          cols={2}
          spacing="3rem"
          breakpoints={[
            { maxWidth: 992, cols: 2 },
            { maxWidth: 600, cols: 1 },
          ]}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                padding: "1.5rem 0",
                borderBottom:
                  index !== services.length - 1
                    ? "1px solid rgba(0,0,0,0.15)"
                    : "none",
              }}
            >
              <Group
                position="apart"
                style={{
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Text
                  style={{
                    fontWeight: 700,
                    fontSize: "2.5rem",
                    color: "#0E2369",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    transition: "color 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#0E2369")}
                >
                  {service.title}
                </Text>

                <Text
                  style={{
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "#000",
                    letterSpacing: "0.5px",
                  }}
                >
                  {service.price}
                </Text>
              </Group>

              <Divider
                size="xs"
                style={{
                  width: "60px",
                  marginBottom: "1rem",
                  borderColor: "#000",
                }}
              />

              <List
                spacing="xs"
                listStyleType="disc"
                withPadding
                style={{
                  color: "#222", lineHeight: 1.5, fontSize: "1.5rem",
                }}
              >
                {service.inclusions.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
