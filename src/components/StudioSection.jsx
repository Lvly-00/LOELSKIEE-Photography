import { Box, Grid, Stack, Text, Button, Image, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import Studio from "../assets/images/Studio.png";

export default function StudioSection() {
  return (
    <Box
      py={{ base: 40, md: 80 }} // Less padding on mobile
      mt={{ base: "2rem", md: "4rem" }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden", 
      }}
    >
      {/* 
         DESKTOP BACKGROUND STRIP 
         Visible only on md screens and up. 
         Positioned absolutely to float behind the content.
      */}
      <Box
        visibleFrom="md"
        bg="#EEEEEE"
        style={{
          position: "absolute",
          top: "60%", // Moved down slightly to match reference
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
              fit="contain" // Ensures the whole composition is visible
              radius="md"
              w="100%"
              style={{
                // On mobile, limit max width so it doesn't take up entire screen height
                maxHeight: "650px", 
                objectPosition: "center",
              }}
            />
          </Grid.Col>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            
            {/* 
                MOBILE/TABLET WRAPPER 
                On small screens, we give this a background color and padding 
                so the text is readable and distinct from the white page background.
            */}
            <Box
                bg={{ base: "#F2F2F2", md: "transparent" }}
                p={{ base: "2rem", md: 0 }}
                style={{ borderRadius: "20px" }}
            >
                <Stack gap="sm">
                    {/* BIG TITLE */}
                    <Text
                        fw={900}
                        lh={0.85} // Tighter line height for the "Stack" look
                        c="black"
                        style={{
                            // Responsive font sizing using clamp
                            // Mobile: 60px, Tablet: 8vw, Desktop: 130px
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
                            size="md"
                            color="black"
                            styles={{
                                root: {
                                    borderWidth: "1.5px",
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                    paddingLeft: "2rem",
                                    paddingRight: "2rem",
                                    borderColor: "#000",
                                    color: "#000",
                                    "&:hover": {
                                        backgroundColor: "#000",
                                        color: "#fff",
                                    }
                                }
                            }}
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