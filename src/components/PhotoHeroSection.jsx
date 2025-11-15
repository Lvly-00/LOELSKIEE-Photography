import { Box, Overlay, Title, Button, Stack } from "@mantine/core";
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
                        fontSize: "clamp(2.8rem, 6vw, 6rem)",
                        fontWeight: 900,
                        letterSpacing: "2px",
                    }}
                >
                    PHOTO
                </Title>

                <Button
                    radius="xl"
                    size="xs"
                    variant="white"
                    style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.45rem 1.2rem",
                        textTransform: "uppercase",
                    }}
                >
                    Services
                </Button>
            </Stack>
        </Box>
    );
}

export default PhotoHeroSection;
