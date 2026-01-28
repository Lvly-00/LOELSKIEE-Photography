import { Box, Overlay, Title, Button, Stack, Badge } from "@mantine/core";
import HeroSection from "../assets/images/Multimedia-Hero-Section.png"


function MultimediaHeroSection() {
    return (
        <Box
            style={{
                position: "relative",
                height: "100vh",
                width: "100%",
                backgroundImage: `url(${HeroSection})`,
                fontFamily: "'Sora', sans-serif",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <Overlay
                opacity={0.45}
                color="#1E1E1E"
                zIndex={1}
            />

            {/* Center Content */}
            <Stack
                align="center"
                justify="center"
                gap="md"
                style={{
                    height: "100%",
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                }}
            >
                <Title
                    order={1}
                    style={{
                        color: "#fff",
                        fontSize: "clamp(3.5rem, 8vw, 9rem)",
                        fontWeight: 900,
                        letterSpacing: "2px",
                        padding: 0,
                        lineHeight: 1,

                    }}
                >
                    MULTIMEDIA
                </Title>

                <Badge
                    radius="xl"
                    size="xl"
                    variant="white"
                    color="black"
                    style={{
                        fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                        fontWeight: 700,
                        padding: "1.2rem 2.5rem", 
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                    }}
                >
                    Services
                </Badge>

            </Stack>
        </Box>
    );
}

export default MultimediaHeroSection;
