import React from "react";
import { Container, Title, Image, Box } from "@mantine/core";
import Packages from "../assets/images/Photo-Packages.png";

function PhotoPackages() {
    return (
        <Box 
            bg="#1E1E1E" 
            py="clamp(4rem, 8vw, 6rem)" 
            style={{ fontFamily: "'Sora', sans-serif" }}
        >
            {/* HEADER */}
            <Container size="lg">
                <Box ta="center" mb={50}>
                    <Title 
                        order={1} 
                        c="white" 
                        fw={700} 
                        style={{ 
                            letterSpacing: 1,
                            fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                            lineHeight: 1.1
                        }}
                    >
                        PHOTOGRAPHY &
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
                    overflow: "hidden"
                }}
            >
                <Image
                    src={Packages}
                    alt="Photography Sample"
                    fit="cover"
                    h="clamp(350px, 40vw, 550px)" 
                    w="100%"
                />
            </Box>
        </Box>
    );
}

export default PhotoPackages;