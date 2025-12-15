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
    img3, img4, img5, img1, img2, img7, img6,
    img8, img9, img10, img11, img12, img3, img4, img5,
  ];

  return (
    <section id="gallery" style={{ padding: "clamp(4rem, 8vw, 6rem) 0", fontFamily: "'Sora', sans-serif" }}>
      <Container size="lg">

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Title
            order={1}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)", // Uniform Header
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
              fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", // Uniform Body
              lineHeight: 1.6,
            }}
          >
            Step into our gallery and immerse yourself in a visual feast of captivating imagery crafted by passionate souls. Here, we present a curated selection of our finest photography, showcasing the beauty, emotion, and artistry that define our work.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
          {images.map((src, index) => (
            <div key={index} style={{ overflow: "hidden", borderRadius: "4px" }}>
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fit="cover"
                style={{
                  filter: "grayscale(80%) saturate(50%) contrast(1.1)", // washed-out look
                  transition: "transform 0.4s ease, filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.filter = "grayscale(0%) saturate(100%) contrast(1.1)"; // full color on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "grayscale(80%) saturate(50%) contrast(1.1)";
                }}
              />
            </div>

          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
