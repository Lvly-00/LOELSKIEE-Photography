import React from "react";
import { Container, Title, Button, Group } from "@mantine/core";

// Icons
const FacebookFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12" /></svg>
);
const InstagramFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3zm5.3-.8a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" /></svg>
);
const GmailFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M12 13.2 2 6.5V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.5l-10 6.7zm10-9.7V6l-10 6.5L2 6V3.5C2 2.7 2.7 2 3.5 2h17c.8 0 1.5.7 1.5 1.5z" /></svg>
);

const BookNowSection = () => {
  return (
    <section style={{ padding: "clamp(3rem, 8vw, 6rem) 1rem", fontFamily: "'Sora', sans-serif" }}>
      <Container size="md" style={{ textAlign: "center" }}>

        {/* HEADLINE */}
        <Title
          style={{
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 4.5rem)", // Standardized H1/H2
            lineHeight: 1.1,
            color: "#000",
            marginBottom: "1.5rem",
          }}
        >
          Capture the moment,<br />
          Relive the memory
        </Title>

        {/* BODY TEXT */}
        <Title
          order={3}
          style={{
            fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", // Standardized Body
            fontWeight: 400,
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.6,
            color: "#333",
          }}
        >
          We offer professional photography and videography services that
          capture life’s most meaningful moments with creativity and precision.
          From weddings and debuts to corporate events and personal milestones,
          we transform every frame into a visual story filled with emotion and artistry.
        </Title>

        {/* ICONS */}
        <Group
          spacing="xl"
          position="center"
          style={{ marginTop: "2rem", justifyContent: "center" }}
        >
          <FacebookFilled />
          <GmailFilled />
          <InstagramFilled />
        </Group>

        {/* CTA BUTTON */}
        <Button
          radius="xl"
          size="lg"
          style={{
            marginTop: "2.5rem",
            backgroundColor: "#FFB700",
            color: "#000",
            fontWeight: 800,
            padding: "0 3rem", // Horizontal padding
            height: "3.5rem",   // Fixed comfortable height
            fontSize: "1rem",
            fontFamily: "'Sora', sans-serif",
            transition: "transform 0.2s",
          }}
        >
          BOOK NOW
        </Button>
      </Container>
    </section>
  );
};

export default BookNowSection;