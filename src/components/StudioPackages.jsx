import React from "react";
import { Container, Grid, Title, Image, Box } from "@mantine/core";
import Packages from "../assets/images/Studio-Packages.png";

function StudioPackages() {
    return (
        <Box pt={60} pb={80}>
            {/* HEADER */}
            <Container size="lg">
                <Box ta="center" mb={40}>
                    <Title order={1} c="black" fw={700} style={{ letterSpacing: 1 }}>
                        BOOTH & STUDIO
                        <br />
                        COVERAGE PACKAGES
                    </Title>

                    {/* underline */}
                    <div
                        style={{
                            width: 180,
                            height: 4,
                            background: "#5D6E5C",
                            margin: "15px auto 0",
                            borderRadius: 2,
                        }}
                    />
                </Box>
            </Container>

            {/* FULL-WIDTH HERO IMAGE */}
            <Box
                style={{
                    width: "100%",
                    position: "relative",
                    left: "50%",
                    right: "50%",
                    marginLeft: "-50%",
                    marginRight: "-50%",
                }}
            >
                <Image
                    src={Packages}
                    alt="Photography Sample"
                    fit="cover"
                    h="clamp(100px, 100vw, 550px)"
                    w="100%"

                />
            </Box>
        </Box>
    );
}

export default StudioPackages;
