import React from "react";
import { Container, Title, Button, Group } from "@mantine/core";
import FacebookIcon from "../assets/images/icons/facebook.svg";
import GmailIcon from "../assets/images/icons/gmail.svg";
import InstagramIcon from "../assets/images/icons/ig.svg";

const BookNowSection = () => {
  const scrollToDeals = () => {
    const dealsSection = document.getElementById("deals");
    if (dealsSection) {
      dealsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section style={{ padding: "clamp(3rem, 8vw, 6rem) 1rem", fontFamily: "'Sora', sans-serif" }}>
      <Container size="md" style={{ textAlign: "center" }}>
        <Title
          style={{
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            lineHeight: 1.1,
            color: "#000",
            marginBottom: "1.5rem",
          }}
        >
          Capture the moment,<br />
          Relive the memory
        </Title>

        <Title
          order={3}
          style={{
            fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
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
        <Group spacing="xl" position="center" style={{ marginTop: "2rem", justifyContent: "center" }}>
          <img src={FacebookIcon} alt="Facebook" style={{ width: "clamp(20px, 4vw, 30px)", height: "auto" }}
          />
          <img src={GmailIcon} alt="Gmail" style={{ width: "clamp(20px, 4vw, 30px)", height: "auto" }}
          />
          <img src={InstagramIcon} alt="Instagram" style={{ width: "clamp(20px, 4vw, 30px)", height: "auto" }}
          />
        </Group>

        {/* CTA BUTTON */}
        <Button
          radius="xl"
          size="md"
          mt="xl"
          onClick={scrollToDeals} // add this
          styles={(theme) => ({
            root: {
              backgroundColor: "#FFB700",
              color: "#000",
              fontWeight: 800,
              fontFamily: "'Sora', sans-serif",
              paddingInline: "clamp(1rem, 5vw, 2.5rem)",
              fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              transition: "background-color 0.2s ease, transform 0.15s ease",

              "&:hover": {
                backgroundColor: "#f0aa00",
                transform: "translateY(-1px)",
              },

              "&:active": {
                transform: "translateY(0)",
              },
            },
          })}
        >
          BOOK NOW
        </Button>
      </Container>
    </section>
  );
};

export default BookNowSection;
