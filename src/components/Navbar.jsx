import React from "react";
import { Link } from "react-router-dom";
import { Container, Group, Button, Text } from "@mantine/core";

const Navbar = () => {
    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: "#F5F1E8",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                zIndex: 100,
                padding: "0.75rem 2rem",
            }}
        >
            <Container
                size="xl"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                {/* Left - Logo / Brand */}
                <h1
                    style={{
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        letterSpacing: "0.5px",
                        color: "#102E50",
                    }}
                >
                    LOELSKIEE
                </h1>

                {/* Center - Nav Links */}
                <Group
                    spacing="xl"
                    style={{
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                >
                    {["About", "Services", "Gallery", "Prices", "Blog", "Contact"].map(
                        (item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                style={{
                                    color: "#102E50",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    fontSize: "1.4rem",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#555")}
                                onMouseLeave={(e) => (e.target.style.color = "#111")}
                            >
                                {item}
                            </Link>
                        )
                    )}
                </Group>

                {/* Right - CTA Button */}
                <Button
                    radius="0"
                    size="md"
                    className="fjalla-one"
                    style={{
                        backgroundColor: "#102E50",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        padding: "0.6rem 1.5rem",
                        letterSpacing: "0.5px",
                        borderRadius: "4px",
                    }}
                >
                    GET IN TOUCH
                </Button>

            </Container>
        </header >
    );
};

export default Navbar;
