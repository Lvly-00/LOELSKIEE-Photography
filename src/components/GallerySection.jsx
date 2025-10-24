import React from "react";
import { Container, SimpleGrid, Text, Title, Image } from "@mantine/core";

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

export default function GallerySection() {
  const images = [
    img1, img2, img7, img3, img4, img5, img6,
    img8, img9, img10, img11, img12
  ];

  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#F5F1E8",
        padding: "5rem 0",
      }}
    >
      <Container size="lg">
        {/* Title */}
        <Title
          order={1}
          style={{
            fontFamily: "Fjalla One, sans-serif",
            fontSize: "clamp(3rem, 8vw, 8rem)",
            letterSpacing: "2px",
            color: "#111",
            marginBottom: "0.5rem",
          }}
        >
          GALLERY
        </Title>

        {/* Description */}
        <Text
          style={{
            maxWidth: "700px",
            color: "#111",
            fontFamily: "Instrument Serif, serif",
            fontSize: "1.5rem",
            lineHeight: 1.6,
            marginBottom: "3rem",
          }}
        >
          Step into our gallery and immerse yourself in a visual feast of
          captivating imagery crafted by passionate souls. Here, we present a
          curated selection of our finest photography, showcasing the beauty,
          emotion, and artistry that define our work.
        </Text>

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
                  filter: "grayscale(80%) sepia(20%) contrast(1.1)",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.filter = "grayscale(0%) sepia(0%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "grayscale(80%) sepia(20%) contrast(1.1)";
                }}
              />
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
