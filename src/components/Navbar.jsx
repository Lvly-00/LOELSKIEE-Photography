import React, { useState } from "react";
import { Link } from "react-router-dom";
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

    return (
        <>
            {/* ✅ Navbar Header */}
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#000",
                    zIndex: 200,
                    padding: "0.5rem 1rem",
                }}
            >
                <Container
                    size="lg"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* ✅ Responsive Logo */}
                    <img
                        src={LOGO}
                        alt="Loelskiee Logo"
                        style={{
                            width: "180px",
                            height: "auto",
                        }}
                    />

                    {/* ✅ Burger visible only under "md" (768px) */}
                    <Burger
                        opened={opened}
                        onClick={() => setOpened(true)}
                        color="white"
                        hiddenFrom="md"
                    />

                    {/* ✅ Desktop Navigation */}
                    <Group spacing="lg" visibleFrom="md">
                        {["HOME", "ABOUT ME", "DEALS"].map((item) => {
                            const isHome = item === "HOME";

                            return (
                                <Button
                                    key={item}
                                    component={Link}
                                    to={`/${item.toLowerCase().replace(" ", "")}`}
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
                </Container>
            </header>

            {/* ✅ MOBILE SIDEBAR */}
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
                    },
                }}
            >

                {/* ✅ Top Navigation Buttons */}
                <Group
                    direction="column"
                    spacing="md"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "95%",
                    }}
                >
                    {/* ✅ Top Navigation Buttons */}
                    <div>
                        {["HOME", "ABOUT ME", "DEALS"].map((item) => {
                            const isHome = item === "HOME";

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
                                            color: isHome ? "#FFB700" : "#fff",
                                            fontWeight: 700,
                                            fontSize: "2rem",

                                            "@media (max-width: 768px)": {
                                                fontSize: "1rem",
                                            },
                                            "@media (max-width: 480px)": {
                                                fontSize: "0.5rem",
                                            },
                                        },
                                    }}
                                    onClick={() => setOpened(false)}
                                >
                                    {item}
                                </Button>
                            );
                        })}
                    </div>

                    {/* ✅ Reach Out Button at the Bottom */}
                    <Button
                        fullWidth
                        radius="xl"
                        size="lg"
                        style={{
                            backgroundColor: "#FFB700",
                            color: "#000",
                            fontWeight: 800,
                        }}
                        onClick={() => setOpened(false)}
                    >
                        REACH OUT
                    </Button>
                </Group>
            </Drawer>

        </>
    );
};

export default Navbar;
