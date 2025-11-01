import React from "react";
import { Container, Group, Text, Image, SimpleGrid } from "@mantine/core";
import LOGO from "../assets/images/Footer-Logo.png";

// Filled Gmail Icon
const GmailFilled = () => (
  <svg width="33" height="33" viewBox="0 0 24 24" fill="black">
    <path d="M12 13.2 2 6.5V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.5l-10 6.7zm10-9.7V6l-10 6.5L2 6V3.5C2 2.7 2.7 2 3.5 2h17c.8 0 1.5.7 1.5 1.5z" />
  </svg>
);

const Footer = () => {
  return (
    <footer
      style={{
        color: "#000",
        padding: "4rem 1.5rem",
        fontFamily: "'Sora', sans-serif",
      }}
    >

      <Container size="xl">
        <Image
          src={LOGO}
          alt="Loelskiee Photography"
          style={{ marginBottom: "1.5rem" }}
        />
        <SimpleGrid
          cols={3}
          spacing="3rem"
          breakpoints={[
            { maxWidth: "md", cols: 1 }, // stack on mobile
          ]}
        >
          {/* ✅ LEFT COLUMN — LOGO + DESC + SOCIAL */}
          <div style={{ display: "flex", flexDirection: "column" }}>


            <Text
              style={{
                maxWidth: "380px",
                lineHeight: 1.5,
                marginBottom: "1.5rem",
              }}
            >
              From weddings to JS proms and every special occasion in between,
              Loelskiee Photography captures each moment with creativity and passion.
              We offer a wide range of photography and video services to make every
              memory last a lifetime.
            </Text>

            <Group spacing="lg">
              {/* Facebook */}
              <svg width="33" height="33" viewBox="0 0 24 24" fill="black">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12" />
              </svg>

              {/* Gmail */}
              <GmailFilled />

              {/* Instagram */}
              <svg width="33" height="33" viewBox="0 0 24 24" fill="black">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3zm5.3-.8a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" />
              </svg>
            </Group>
          </div>

          {/* ✅ CENTER COLUMN — CONTACT INFO */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: "1.1rem",
                marginBottom: "1rem",
              }}
            >
              CONTACT INFORMATION
            </Text>

            <ul
              style={{
                listStyle: "disc",
                marginLeft: "1.2rem",
                lineHeight: 1.6,
              }}
            >
              <li>Manila, Philippines</li>
              <li>0915-884-6836 (Globe)</li>
              <li>0985-855-4720 (Smart)</li>
              <li>loelskiee@gmail.com</li>
            </ul>
          </div>

          {/* ✅ RIGHT COLUMN — DEV TEAM */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: "1.1rem",
                marginBottom: "1rem",
              }}
            >
              DEV TEAM
            </Text>

            <ul
              style={{
                listStyle: "disc",
                marginLeft: "1.2rem",
                lineHeight: 1.6,
              }}
            >
              <li>Fernandez, Jamela D.</li>
              <li>Pintes, Lovely Heart V.</li>
              <li>Dungca, Allain Francois D.</li>
            </ul>
          </div>
        </SimpleGrid>
      </Container>


      {/* ✅ Bottom section */}
      <Text
        style={{
          textAlign: "center",
          marginTop: "3rem",
          fontSize: "0.8rem",
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} Loelskiee Photography — All Rights Reserved
      </Text>
    </footer>
  );
};

export default Footer;
