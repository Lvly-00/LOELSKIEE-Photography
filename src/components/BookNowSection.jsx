import React, { useState } from "react";
import { Container, Title, Button, Group, Text } from "@mantine/core";

import FacebookIcon from "../assets/images/icons/facebook.svg";
import GmailIcon from "../assets/images/icons/gmail.svg";
import InstagramIcon from "../assets/images/icons/ig.svg";

/* ================================
   Reusable Copy Icon
================================ */
const CopyIcon = ({ value, icon, label }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <button
        type="button"
        onClick={copyToClipboard}
        aria-label={label}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img
          src={icon}
          alt={label}
          style={{ width: "clamp(24px, 4vw, 30px)", }}
        />
      </button>

      {copied && (
        <Text
          size="xs"
          style={{
            position: "absolute",
            top: "-2.6rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.75)",
            color: "#fff",
            padding: "2px 6px",
            borderRadius: "4px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          Email copied!
        </Text>
      )}
    </div>
  );
};

/* ================================
   Book Now Section
================================ */
const BookNowSection = () => {
  const scrollToDeals = () => {
    const dealsSection = document.getElementById("deals");
    if (dealsSection) {
      dealsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        padding: "clamp(3rem, 8vw, 6rem) 1rem",
        fontFamily: "'Sora', sans-serif",
      }}
    >
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
          Capture the moment,
          <br />
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
          <a
            href="https://www.facebook.com/Loelskieez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              style={{ width: "clamp(24px, 4vw, 33px)", height: "auto" }}
            />
          </a>

          {/* Gmail copy */}
          <CopyIcon
            value="loelskiee@gmail.com"
            icon={GmailIcon}
            label="Copy email address"
          />

          <a
            href="https://www.instagram.com/loelskieez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              style={{ width: "clamp(24px, 4vw, 30px)", height: "auto" }}
            />
          </a>
        </Group>

        {/* CTA BUTTON */}
        <Button
          radius="xl"
          size="lg"
          mt="xl"
          onClick={scrollToDeals}
          styles={() => ({
            root: {
              backgroundColor: "#FFB700",
              color: "#000",
              fontWeight: 800,
              fontFamily: "'Sora', sans-serif",
              paddingInline: "clamp(1.5rem, 5vw, 2.5rem)",
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


