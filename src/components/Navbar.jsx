import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  Group,
  Button,
  Burger,
  Drawer,
} from "@mantine/core";
import LOGO from "../assets/images/LOGO.png";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);

  const location = useLocation();
  const isHome =
    location.pathname === "/" || location.pathname === "/home";

  // Detect scrolling with long fade
  useEffect(() => {
    const handleScroll = () => {
      const fadeDistance = 550;
      const ratio = Math.min(window.scrollY / fadeDistance, 1);
      setScrollRatio(ratio);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 200,
          padding: "1rem 1.5rem",

          backgroundColor: `rgba(0, 0, 0, ${0.15 + scrollRatio * 0.85})`,
          backdropFilter: `blur(${16 * (1 - scrollRatio)}px)`,
          WebkitBackdropFilter: `blur(${16 * (1 - scrollRatio)}px)`,

          transition:
            "background-color 0.25s ease, backdrop-filter 0.25s ease, padding 0.25s ease",
        }}
      >
        <Container
          size="xl"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0",
          }}
        >
          <Link to="/">
            <img
              src={LOGO}
              alt="Loelskiee Logo"
              style={{
                width: "clamp(100px, 15vw, 180px)",
                height: "auto",
                transition: "0.3s ease",
                cursor: "pointer", 
              }}
            />
          </Link>
          {/* BURGER only on HOME */}
          {isHome && (
            <Burger
              opened={opened}
              onClick={() => setOpened(true)}
              color="white"
              hiddenFrom="md"
            />
          )}

          {/* DESKTOP NAVIGATION only on HOME */}
          {isHome ? (
            <Group spacing="lg" visibleFrom="md">
              {["HOME", "ABOUT ME", "DEALS"].map((item) => {
                const isHomeBtn = item === "HOME";

                return (
                  <Button
                    key={item}
                    component={Link}
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    radius="xl"
                    size="md"
                    styles={{
                      root: {
                        backgroundColor: isHomeBtn ? "#ffffff" : "transparent",
                        color: isHomeBtn ? "#000" : "#ffffff",
                        border: isHomeBtn ? "none" : "2px solid #fff",
                        fontWeight: 700,
                        fontSize: "1rem",
                        padding: "0.6rem 1.6rem",
                      },
                    }}
                  >
                    {item}
                  </Button>
                );
              })}

              <Button
                radius="xl"
                size="md"
                style={{
                  backgroundColor: "#FFB700",
                  color: "#000",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                REACH OUT
              </Button>
            </Group>
          ) : (
            // OTHER PAGES — ONLY REACH OUT
            <Button
              radius="xl"
              size="md"
              style={{
                backgroundColor: "#FFB700",
                color: "#000",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.5px",
              }}
            >
              REACH OUT
            </Button>
          )}
        </Container>
      </header>

      {/* MOBILE DRAWER — ONLY SHOW ON HOME */}
      {isHome && (
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          size="md"
          hiddenFrom="md"
          position="right"
          styles={{
            drawer: {
              backgroundColor: "#000",
              color: "#fff",
              height: "75vh",
              "@media (max-width: 768px)": {
                width: "60% !important",
              },
              "@media (max-width: 480px)": {
                width: "80% !important",
              },
              "@media (max-width: 360px)": {
                width: "100% !important",
              },
            },
            body: {
              height: "100%",
              backgroundColor: "#000",
            },
            header: {
              backgroundColor: "#000",
              color: "#fff",
              paddingBottom: "4rem",
            },
          }}
        >
          <Group
            direction="column"
            spacing="md"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div>
              {["HOME", "ABOUT ME", "DEALS"].map((item) => {
                const isHomeBtn = item === "HOME";

                return (
                  <Button
                    fullWidth
                    key={item}
                    component={Link}
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    radius="xl"
                    size="lg"
                    styles={{
                      root: {
                        backgroundColor: "transparent",
                        color: isHomeBtn ? "#FFB700" : "#fff",
                        fontWeight: 700,
                        fontSize: "clamp(1.8rem, 4vw, 2rem)",
                      },
                    }}
                    onClick={() => setOpened(false)}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>

            <Button
              radius="xl"
              size="3rem"
              style={{
                backgroundColor: "#FFB700",
                fontSize: "clamp(2rem, 3.5vw, 2.2rem)",
                color: "#000",
                fontWeight: 800,
              }}
              onClick={() => setOpened(false)}
            >
              REACH OUT
            </Button>
          </Group>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
