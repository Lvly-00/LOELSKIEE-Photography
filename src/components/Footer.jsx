import React from "react";
import { Container, Group, Text, Anchor } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGoogle,
  IconBrandApple,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#102E50",
        color: "white",
        padding: "4rem 0 2rem",
        textAlign: "center",
        fontFamily: "'Instrument Serif', serif",
      }}
    >
      <Container size="lg">
        {/* Big Logo / Name */}
        <Text
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 900,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          LOELSKIEE PHOTOGRAPHY
        </Text>

        {/* Navigation Links */}
        <Group
          spacing="md"
          position="center"
          style={{
            justifyContent: "center",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            fontSize: "0.95rem",
            letterSpacing: "0.5px",
          }}
        >
          {[
            "/INDEX",
            "/ABOUT",
            "/GALLERY",
            "/SERVICE",
            "/PRICE",
            "/BLOG",
            "/CONTACT",
          ].map((link, i) => (
            <Anchor
              key={i}
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 0.6)}
              onMouseLeave={(e) => (e.target.style.opacity = 1)}
            >
              {link}
            </Anchor>
          ))}
        </Group>

        {/* Social Media Icons */}
        <Group
          position="center"
          spacing="lg"
          style={{
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <IconBrandFacebook size={20} />
          <IconBrandGoogle size={20} />
          <IconBrandApple size={20} />
          <IconBrandInstagram size={20} />
        </Group>

        {/* Copyright */}
        <Text
          size="xs"
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            marginTop: "2rem",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.3px",
          }}
        >
          © {new Date().getFullYear()} LOELSKIEE Photography — All Rights
          Reserved
        </Text>
      </Container>
    </footer>
  );
}

export default Footer;
