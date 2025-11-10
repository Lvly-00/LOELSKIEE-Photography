import React from "react";
import { Container, Title, Text, Button, Group } from "@mantine/core";

//  Filled SVG icons (clean, centered, black)
const FacebookFilled = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="black">
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12" />
  </svg>
);

const InstagramFilled = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="black">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3zm5.3-.8a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" />
  </svg>
);

const GmailFilled = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="black">
    <path d="M12 13.2 2 6.5V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.5l-10 6.7zm10-9.7V6l-10 6.5L2 6V3.5C2 2.7 2.7 2 3.5 2h17c.8 0 1.5.7 1.5 1.5z" />
  </svg>
);


const BookNowSection = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        style={{
          padding: "clamp(1rem, 6vw, 5rem) clamp(0.75rem, 1.5vw, 1.5rem)",
          fontFamily: "'Sora', 'Poppins', 'Inter', sans-serif",
        }}
      >
        <Container size="md" style={{ textAlign: "center" }}>

          {/*  Heading */}
          <Title
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 6vw, 5rem)",
              lineHeight: 1.1,
              color: "#000",
            }}
          >
            Capture the moment,
          </Title>
          <Title
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 6vw, 5rem)",
              lineHeight: 1.1,
              marginBottom: "1.2rem",
              color: "#000",
            }}
          >
            Relive the memory
          </Title>

          {/*  Paragraph */}
          <Title
            style={{
              fontSize: "clamp(.5rem, 4vw, 1.3rem)",
              fontWeight: 400,
              maxWidth: "clamp(520px, 110vw, 900px)",
              margin: "0 auto",
              lineHeight: 1.3,
              color: "#000",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            We offer professional photography and videography services that
            capture life’s most meaningful moments with creativity and precision.
            From weddings and debuts to corporate events and personal milestones,
            we transform every frame into a visual story filled with emotion and artistry.
            Through our lens, fleeting moments become timeless memories you can
            relive again and again.
          </Title>

          {/*  Centered Social Icons (filled) */}
          <Group
            spacing="xl"
            position="center"
            style={{ marginTop: "2rem", justifyContent: "center" }}
          >
            <FacebookFilled />
            <GmailFilled />
            <InstagramFilled />
          </Group>

          {/*  BOOK NOW Button */}
          <Button
            radius="xl"
            size="clamp(2rem, 5vw, 4rem)"
            style={{
              marginTop: "clamp(1.5rem, 4vw, 2.5rem)",
              backgroundColor: "#FFB700",
              color: "#000",
              fontWeight: 800,
              padding: "clamp(0.5rem, 2vw, .5rem) clamp(1.5rem, 4vw, 4rem)",
              fontSize: "clamp(.9rem, 2.5vw, 1.2rem)",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            BOOK NOW
          </Button>


        </Container>

        {/*  Responsive Styles */}
        {/* <style>
          {`
            @media (max-width: 768px) {
              h2 {
                font-size: 2.4rem !important;
              }
              p {
                font-size: 1.05rem !important;
                line-height: 1.4 !important;
              }
            }
          `}
        </style> */}
      </section>
    </>
  );
};

export default BookNowSection;
