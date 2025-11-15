import React from "react";
import { Container, SimpleGrid, Text, Title, Image, Box, Grid } from "@mantine/core";

import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";
import img6 from "../assets/images/gallery6.jpg";
import img7 from "../assets/images/gallery7.jpg";
import img8 from "../assets/images/gallery8.jpg";
import img9 from "../assets/images/gallery9.jpg";
import img10 from "../assets/images/gallery10.jpg";
import img11 from "../assets/images/gallery11.jpg";
import img12 from "../assets/images/gallery12.jpg";

export default function PhotoGallerySection() {
  const images = [
    img3, img4, img5, img1, img2, img7, img6,
    img8, img9, img10, img11, img12, img3, img4, img5,
  ];

  return (
    <section
      id="gallery"
      style={{
        padding: "5rem 0",
        backgroundColor: "#1E1E1E",
      }}
    >
      <Container size="lg">

        {/* Title & Description */}
        <Box ta="center" mb={40}>
          <Title order={1} c="white" fw={700} style={{ letterSpacing: 1 }}>
            GALLERY
          </Title>

          {/* underline */}
          <div
            style={{
              width: 180,
              height: 4,
              background: "#5D6E5C",
              margin: "15px auto 0",
              borderRadius: 2,
            }}
          />

          <Grid justify="center" align="center" mt="md">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Text
                fw={300}
                ta="center"
                style={{
                  paddingTop: "1rem",
                  maxWidth: "700px",
                  margin: "0 auto",
                  color: "#ffffff",
                  fontFamily: "Instrument Serif, serif",
                  fontSize: "clamp(.5rem, 4vw, 1.2rem)",
                  lineHeight: 1.3,
                }}
              >
                Step into our gallery and immerse yourself in a visual feast of
                captivating imagery crafted by passionate souls. Here, we present a
                curated selection of our finest photography, showcasing the beauty,
                emotion, and artistry that define our work.
              </Text>
            </Grid.Col>
          </Grid>
        </Box>

        {/* Gallery Grid */}
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[
            { maxWidth: "md", cols: 2 },
            { maxWidth: "sm", cols: 1 },
          ]}
        >
          {images.map((src, index) => (
            <div key={index} style={{ overflow: "hidden", borderRadius: "4px" }}>
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fit="cover"
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
