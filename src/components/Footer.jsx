import { useState } from "react";
import { Container, Group, Text, Image, SimpleGrid, Box } from "@mantine/core";
import { useLocation } from "react-router-dom";
import LOGO from "../assets/images/Footer-Logo.png";
import FooterImg from "../assets/images/FooterImg.png";
import FacebookIcon from "../assets/images/icons/facebook.svg";
import GmailIcon from "../assets/images/icons/gmail.svg";
import InstagramIcon from "../assets/images/icons/ig.svg";

const Footer = () => {
  const location = useLocation();
  const whiteBgPaths = ["/", "/studio"];
  const useWhiteBg = whiteBgPaths.includes(location.pathname);

  const email = "loelskiee@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
    });
  };

  return (
    <footer style={{ color: "#000", fontFamily: "'Sora', sans-serif" }}>
      {/* Top image — no background */}
      <div style={{ position: "relative", background: useWhiteBg ? "#ffffff" : "#1E1E1E" }}>
        <Image
          src={FooterImg}
          alt="Footer Decoration"
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        {/* Footer content with background starts below image */}
        <div
          style={{
            background: "#FEF9F6",
            padding: "4rem 0 2rem 0",
            marginTop: "clamp(-150px, -10vw, -10px)",
          }}
        >
          <Container size="xl">
            <Image
              src={LOGO}
              alt="Loelskiee Photography"
              style={{
                marginBottom: "1.5rem",
                width: "clamp(150px, 20vw, 300px)",
              }}
            />

            {/* Desktop: 3 columns as in original */}
            <SimpleGrid
              cols={3}
              spacing="clamp(0.3rem, 1vw, 3rem)"
              breakpoints={[{ maxWidth: "md", cols: 1 }]} // on small screen, cols=1 (stack)
              style={{ gap: "clamp(0.3rem, 1vw, 3rem)" }}
            >
              {/* LEFT COLUMN */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "380px",
                  margin: "0 auto", // center on small screens
                }}
              >
                <Text
                  style={{
                    lineHeight: 1.5,
                    marginBottom: "1.5rem",
                    fontSize: "clamp(0.5rem, 2.5vw, 1rem)",
                  }}
                >
                  From weddings to JS proms and every special occasion in between,
                  Loelskiee Photography captures each moment with creativity and passion. We offer a wide range of photography and video services to make every memory last a lifetime.
                </Text>

                <Group spacing="lg">
                  {/* Social Icons with links */}
                  <a
                    href="https://www.facebook.com/Loelskieez"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src={FacebookIcon}
                      alt="Facebook"
                      style={{ width: "clamp(20px, 4vw, 30px)", height: "auto" }}
                    />
                  </a>

                  <div style={{ position: "relative" }}>
                    <button
                      onClick={copyEmailToClipboard}
                      aria-label="Copy email address"
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        display: "inline-flex",
                      }}
                      type="button"
                    >
                      <img
                        src={GmailIcon}
                        alt="Gmail"
                        style={{ width: "clamp(20px, 4vw, 30px)", height: "auto" }}
                      />
                    </button>

                    {copied && (
                      <Text
                        size="xs"
                        color="green"
                        style={{
                          position: "absolute",
                          top: "-1.5rem",
                          left: "50%",
                          transform: "translateX(-50%)",
                          backgroundColor: "rgba(0, 0, 0, 0.75)",
                          color: "white",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          pointerEvents: "none",
                          userSelect: "none",
                          whiteSpace: "nowrap",
                          fontWeight: "bold",
                          zIndex: 10,
                        }}
                      >
                        Email copied!
                      </Text>
                    )}
                  </div>

                  <a
                    href="https://www.instagram.com/loelskieez"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      style={{ width: "clamp(20px, 4vw, 30px)", height: "auto" }}
                    />
                  </a>
                </Group>

              </div>

              {/* CENTER COLUMN */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(0.5rem, 2.5vw, 1rem)",
                    marginBottom: "clamp(0.2rem, 2.5vw, 0.5rem)",
                  }}
                >
                  CONTACT INFORMATION
                </Text>

                <ul
                  style={{
                    listStyle: "disc",
                    lineHeight: 1.6,
                    fontSize: "clamp(0.5rem, 2.5vw, 1rem)",
                    paddingLeft: "1rem",
                  }}
                >
                  <li>Manila, Philippines</li>
                  <li>0915-884-6836 (Globe)</li>
                  <li>0985-855-4720 (Smart)</li>
                  <li>loelskiee@gmail.com</li>
                </ul>
              </div>

              {/* RIGHT COLUMN */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(0.5rem, 2.5vw, 1rem)",
                    marginBottom: "clamp(0.2rem, 2.5vw, 0.5rem)",
                  }}
                >
                  OUR SERVICES
                </Text>

                <ul
                  style={{
                    listStyle: "disc",
                    lineHeight: 1.6,
                    fontSize: "clamp(0.5rem, 2.5vw, 1rem)",
                    paddingLeft: "1.5rem",
                  }}
                >
                  <li>Photography</li>
                  <li>Videography</li>
                  <li>Multimedia</li>
                  <li>Same Day Edit</li>
                  <li>Studio</li>
                </ul>
              </div>
            </SimpleGrid>

            {/* COPYRIGHT SECTION */}
            <div
              style={{
                marginTop: "3rem",
                borderTop: "1px solid #ddd",
                paddingTop: "1rem",
                textAlign: "center",
              }}
            >
              <Text size="sm" color="dimmed" style={{ fontSize: "clamp(0.5rem, 2vw, 0.8rem)" }}>
                © {new Date().getFullYear()} Loelskiee Photography. All rights reserved.
              </Text>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
