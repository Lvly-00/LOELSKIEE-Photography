import { Box, Grid, Stack, Text, Button, Image, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from '../css/ExploreButton.module.css';
import Studio from "../assets/images/Studio.png";

export default function StudioSection() {
  return (
    <Box
      py={{ base: 40, md: 80 }} 
      mt={{ base: "2rem", md: "4rem" }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <Box
        visibleFrom="md"
        bg="#EEEEEE"
        style={{
          position: "absolute",
          top: "60%",
          transform: "translateY(-50%)",
          left: 0,
          right: 0,
          height: 265,
          zIndex: 0,
        }}
      />

      {/* Centered Content */}
      <Container size="xl" style={{ position: "relative", zIndex: 2 }}>
        <Grid
          gutter={{ base: "2rem", md: "5rem", lg: "7rem" }}
          align="center"
        >

          {/* LEFT SIDE: IMAGE (Black Card + Photo) */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Image
              src={Studio}
              alt="Studio Setup"
              fit="contain"
              radius="md"
              w="100%"
              style={{
                maxHeight: "650px",
                objectPosition: "center",
              }}
            />
          </Grid.Col>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <Grid.Col span={{ base: 12, md: 5 }}>


            <Box
              bg={{ base: "#F2F2F2", md: "transparent" }}
              p={{ base: "2rem", md: 0 }}
              style={{ borderRadius: "20px" }}
            >
              <Stack gap="sm">
                {/* BIG TITLE */}
                <Text
                  fw={900}
                  lh={0.85}
                  c="black"
                  style={{
                    fontSize: "clamp(3.5rem, 9vw, 8rem)",
                    letterSpacing: "-2px"
                  }}
                >
                  STU <br /> DIO
                </Text>

                {/* DESCRIPTION */}
                <Text
                  size="lg"
                  c="black"
                  mt="md"
                  mb="lg"
                  style={{
                    maxWidth: 450,
                    lineHeight: 1.6,
                    fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)"
                  }}
                >
                  We offer professional photobooth and studio services perfect for
                  birthdays, weddings, corporate events, and more. Whether you want
                  fun, candid shots or elegant studio portraits, our team provides
                  high-quality photos, creative backdrops, and instant prints to
                  make your memories last a lifetime.
                </Text>

                {/* BUTTON */}
                <Link to="/studio" style={{ width: 'fit-content' }}>

                  <Button
                    variant="outline"
                    radius="xl"
                    size="lg"
                    classNames={{ root: classes.root }}
                  >
                    EXPLORE
                  </Button>

                </Link>
              </Stack>
            </Box>
          </Grid.Col>

        </Grid>
      </Container>
    </Box>
  );
}
