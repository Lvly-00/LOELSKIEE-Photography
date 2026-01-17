import React from "react";
import { Container, SimpleGrid, Text, Title, Image } from "@mantine/core";

// Generate 24 images dynamically
const images = Array.from({ length: 24 }, (_, i) =>
  new URL(`../assets/images/gallery/gallery${i + 1}.jpg`, import.meta.url).href
);

export default function GallerySection() {
  return (
    <section
      id="gallery"
      style={{
        padding: "clamp(4rem, 8vw, 6rem) 0",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      <Container size="lg">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Title
            order={1}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "1px",
              color: "#111",
              marginBottom: "1rem",
            }}
          >
            GALLERY
          </Title>

          <Text
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#333",
              fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
              lineHeight: 1.6,
            }}
          >
            Step into our gallery and immerse yourself in a visual feast of
            captivating imagery crafted by passionate souls.
          </Text>
        </div>

        {/* Grid — always 3 columns */}
        <SimpleGrid cols={3} spacing="sm">
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "6px",
              }}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fit="cover"
                height="100%"
                style={{
                  filter: "grayscale(80%) saturate(50%) contrast(1.1)",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.filter =
                    "grayscale(0%) saturate(100%) contrast(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter =
                    "grayscale(80%) saturate(50%) contrast(1.1)";
                }}
              />
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
