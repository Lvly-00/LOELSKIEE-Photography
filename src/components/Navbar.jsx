import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Group, Button, Burger } from "@mantine/core";
import LOGO from "../assets/images/LOGO.png";

const Navbar = () => {
    const [opened, setOpened] = useState(false);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: "#000",
                zIndex: 100,
                padding: "0.75rem 1.5rem",
            }}
        >
            <Container
                size="xl"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* ✅ Logo */}
                <img
                    src={LOGO}
                    alt="Loelskiee Logo"
                    style={{
                        width: "200px",
                        height: "auto",
                    }}
                />

                {/* ✅ MOBILE MENU BURGER */}
                <Burger
                    opened={opened}
                    onClick={() => setOpened(!opened)}
                    color="white"
                    style={{
                        display: "none",
                        "@media (max-width: 768px)": {
                            display: "block",
                        },
                    }}
                />

                {/* ✅ NAV ITEMS */}
                <Group
                    spacing="lg"
                    style={{
                        "@media (max-width: 768px)": {
                            display: opened ? "flex" : "none",
                            position: "absolute",
                            top: "100%",
                            right: 0,
                            width: "100%",
                            backgroundColor: "#000",
                            padding: "1rem 0",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem",
                            borderTop: "1px solid #333",
                        },
                    }}
                >
                    {["HOME", "ABOUT ME", "DEALS"].map((item) => {
                        const isHome = item === "HOME";

                        return (
                            <Button
                                key={item}
                                component={Link}
                                to={`/${item.toLowerCase().replace(" ", "")}`}
                                variant="filled"
                                radius="xl"
                                size="md"
                                styles={{
                                    root: {
                                        backgroundColor: isHome ? "#ffffff" : "transparent",
                                        color: isHome ? "#000" : "#ffffff",
                                        border: isHome ? "none" : "2px solid #fff",
                                        fontWeight: 700,
                                        fontSize: "1rem",
                                        padding: "0.6rem 1.6rem",
                                        letterSpacing: "0.5px",
                                        textTransform: "none",
                                        width: "fit-content",
                                    },
                                }}
                                onClick={() => setOpened(false)}    
                            >
                                {item}
                            </Button>
                        );
                    })}

                    {/* ✅ Reach Out Button */}
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
                        onClick={() => setOpened(false)}
                    >
                        REACH OUT
                    </Button>
                </Group>
            </Container>
        </header>
    );
};

export default Navbar;
