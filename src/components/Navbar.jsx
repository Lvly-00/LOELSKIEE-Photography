import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Group,
  Button,
  Burger,
  Drawer,
  Stack,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import LOGO from "../assets/images/LOGO.png";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Check if we are on the home page (including /home)
  const isHome = location.pathname === "/" || location.pathname === "/home";

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT ME", id: "aboutme" },
    { label: "DEALS", id: "deals" },
  ];

  // 1. REUSABLE SCROLL FUNCTION
  // This performs the actual scrolling calculation
  const performSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setOpened(false); // Close drawer if open
    }
  };

  // 2. HANDLER FOR CLICKS
  const handleNavigation = (id) => {
    if (isHome) {
      // If we are already home, scroll immediately
      performSmoothScroll(id);
    } else {
      // If NOT home, navigate to home and pass the target ID in 'state'
      navigate("/", { state: { targetId: id } });
    }
  };

  // 3. LISTEN FOR ARRIVAL FROM OTHER PAGES
  useEffect(() => {
    // If we are on home AND we have a targetId in the history state...
    if (isHome && location.state && location.state.targetId) {
      
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        performSmoothScroll(location.state.targetId);
        
        // OPTIONAL: Clear the state so it doesn't scroll again on refresh
        // We use 'replace: true' to update the history without adding a new entry
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isHome, location, navigate]);


  // Scroll opacity effect
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
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 200,
          padding: isMobile ? "0.8rem 1rem" : "1rem 1.5rem",
          backgroundColor: `rgba(0, 0, 0, ${
            scrollRatio ? 0.6 + scrollRatio * 0.4 : 0
          })`,
          backdropFilter: scrollRatio > 0 ? "blur(5px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Container
          size="xl"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          {/* LOGO */}
          <div
            onClick={() => handleNavigation("home")}
            style={{ cursor: "pointer", zIndex: 201 }}
          >
            <img
              src={LOGO}
              alt="Loelskiee Logo"
              style={{
                width: "clamp(80px, 10vw, 150px)",
                height: "auto",
                transition: "0.3s ease",
                display: "block",
              }}
            />
          </div>

          {/* BURGER (Mobile) - Only on Home */}
          {isHome && (
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              color="white"
              hiddenFrom="md"
              size="sm"
            />
          )}

          {/* DESKTOP NAV - Only on Home */}
          {isHome ? (
            <Group gap="lg" visibleFrom="md">
              {navItems.map((item) => {
                const isHomeBtn = item.label === "HOME";
                return (
                  <Button
                    key={item.label}
                    onClick={() => handleNavigation(item.id)}
                    radius="xl"
                    size="md"
                    styles={{
                      root: {
                        backgroundColor: isHomeBtn ? "#ffffff" : "transparent",
                        color: isHomeBtn ? "#000" : "#ffffff",
                        border: isHomeBtn ? "none" : "2px solid #fff",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        padding: "0.5rem 1.5rem",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          backgroundColor: isHomeBtn
                            ? "#e6e6e6"
                            : "rgba(255,255,255,0.15)",
                          transform: "translateY(-2px)",
                        },
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
                onClick={() =>
                  window.open("https://www.facebook.com/Loelskieez", "_blank")
                }
                styles={{
                  root: {
                    backgroundColor: "#FFB700",
                    color: "#000",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#ffc933",
                      transform: "translateY(-2px)",
                    },
                  },
                }}
              >
                REACH OUT
              </Button>
            </Group>
          ) : (
            // NOT HOME PAGE - Show Reach Out
            <Button
              radius="xl"
              size={isMobile ? "sm" : "md"}
              onClick={() =>
                window.open("https://www.facebook.com/Loelskieez", "_blank")
              }
              styles={{
                root: {
                  backgroundColor: "#FFB700",
                  color: "#000",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                  "&:hover": {
                    backgroundColor: "#ffc933",
                  },
                },
              }}
            >
              REACH OUT
            </Button>
          )}
        </Container>
      </header>

      {/* MOBILE DRAWER */}
      {isHome && (
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          size="100%"
          hiddenFrom="md"
          position="right"
          withCloseButton={false}
          transitionProps={{ transition: "slide-left", duration: 250 }}
          styles={{
            body: {
              height: "100%",
              backgroundColor: "#000",
              padding: "0",
              display: "flex",
              flexDirection: "column",
            },
            content: {
              backgroundColor: "#000",
            },
          }}
        >
          <Container
            size="xl"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.8rem 1rem",
              width: "100%",
            }}
          >
             <div onClick={() => { handleNavigation('home'); setOpened(false); }}>
               <img src={LOGO} alt="Logo" style={{ width: "80px", height: "auto" }} />
             </div>
             <Burger opened={opened} onClick={() => setOpened(false)} color="white" size="sm" />
          </Container>

          <Stack
            justify="center"
            align="center"
            style={{
              flex: 1,
              paddingBottom: "4rem",
            }}
            gap="xl"
          >
            {navItems.map((item) => {
              const isHomeBtn = item.label === "HOME";
              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavigation(item.id)}
                  variant="subtle"
                  styles={{
                    root: {
                      backgroundColor: "transparent",
                      color: isHomeBtn ? "#FFB700" : "#fff",
                      fontWeight: 800,
                      fontSize: "clamp(2rem, 5vw, 3rem)",
                      height: "auto",
                      "&:hover": {
                        backgroundColor: "transparent",
                        opacity: 0.8,
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}

            <Box mt="xl">
              <Button
                radius="xl"
                size="xl"
                onClick={() =>
                  window.open("https://www.facebook.com/Loelskieez", "_blank")
                }
                styles={{
                  root: {
                    backgroundColor: "#FFB700",
                    color: "#000",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    padding: "0.8rem 3rem",
                    "&:hover": {
                      backgroundColor: "#ffc933",
                    },
                  },
                }}
              >
                REACH OUT
              </Button>
            </Box>
          </Stack>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;