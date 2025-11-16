import { Box, Overlay, Title, Button, Stack, Badge } from "@mantine/core";
import HeroSection from "../assets/images/Photo-Hero-Section.png"


function PhotoHeroSection() {
    return (
        <Box
            style={{
                position: "relative",
                height: "90vh",
                width: "100%",
                backgroundImage: `url(${HeroSection})`,

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
                gap={0}
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
                        fontSize: "clamp(2.8rem, 8vw, 10rem)",
                        fontWeight: 900,
                        letterSpacing: "2px",
                        padding: 0
                    }}
                >
                    PHOTO
                </Title>

                <Badge
                    radius="xl"
                    size="lg"
                    variant="white"
                    color="black"
                    style={{
                        fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                        fontWeight: 700,
                        padding: "clamp(0.7rem, 1.8vw, 0.9rem) clamp(1.6rem, 4vw, 2.4rem)",
                        textTransform: "uppercase",
                    }}
                >
                    Services
                </Badge>

            </Stack>
        </Box>
    );
}

export default PhotoHeroSection;
