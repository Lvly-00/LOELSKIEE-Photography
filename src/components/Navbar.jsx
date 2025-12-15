import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
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
  const navigate = useNavigate();
  
  const isHome = location.pathname === "/" || location.pathname === "/home";

  // Define your navigation items and their target IDs
  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT ME", id: "aboutme" },
    { label: "DEALS", id: "deals" },
  ];

  // Function to handle smooth scrolling with offset
  const scrollToSection = (id) => {
    // If we are not on home, go there first (optional logic)
    if (!isHome) {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // Calculate offset to account for fixed header (approx 80px-100px)
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setOpened(false); // Close mobile drawer if open
    }
  };

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
          // fully transparent initially
          backgroundColor: `rgba(0, 0, 0, ${scrollRatio ? 0.5 + scrollRatio * 0.5 : 0})`,
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
          {/* Logo scrolls to top if on home */}
          <div onClick={() => scrollToSection('home')} style={{ cursor: "pointer" }}>
            <img
              src={LOGO}
              alt="Loelskiee Logo"
              style={{
                width: "clamp(90px, 12vw, 150px)",
                height: "auto",
                transition: "0.3s ease",
              }}
            />
          </div>

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
              {navItems.map((item) => {
                const isHomeBtn = item.label === "HOME";

                return (
                  <Button
                    key={item.label}
                    // REMOVED: component={Link} and to={...}
                    // ADDED: onClick handler
                    onClick={() => scrollToSection(item.id)} 
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
                        transition: "all 0.3s ease", // Added smooth hover transition
                        '&:hover': {
                           backgroundColor: isHomeBtn ? "#eee" : "rgba(255,255,255,0.1)"
                        }
                      },
                    }}
                  >
                    {item.label}
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
                onClick={() =>
                  window.open("https://www.facebook.com/Loelskieez", "_blank")
                }
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
              onClick={() =>
                window.open("https://www.facebook.com/Loelskieez", "_blank")
              }
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
              {navItems.map((item) => {
                const isHomeBtn = item.label === "HOME";

                return (
                  <Button
                    fullWidth
                    key={item.label}
                    // REMOVED Link, Added onClick
                    onClick={() => scrollToSection(item.id)}
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
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>

            <Button
              radius="xl"
              size="3rem"
              style={{
                backgroundColor: "#FFB700",
                fontSize: "clamp(1rem, 3vw, 2rem)",
                color: "#000",
                fontWeight: 800,
              }}
              onClick={() =>
                window.open("https://www.facebook.com/Loelskieez", "_blank")
              }
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