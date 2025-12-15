import React from "react";
import { Container, Grid, Text, Button, Image, Paper, Center, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";

import PhotoImg from "../assets/images/Photo.png";
import VideoImg from "../assets/images/Video.png";
import MultiImg from "../assets/images/Multimedia.png";
import SdeImg from "../assets/images/SDE.png";
import Deals from "../assets/images/Deals.png";

const DealsSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 769px)"); // mobile breakpoint

  const bgColor = isSmallScreen ? "#fff" : "#000";

  const deals = [
    {
      title: "PHOTO",
      img: PhotoImg,
      bg: "#95A795",
      text: "We offer professional video services that bring your stories to life with creativity, precision, and style.",
    },
    {
      title: "VIDEO",
      img: VideoImg,
      bg: "#CBAEB6",
      text: "We offer professional photo and video services that capture your best moments with creativity, precision, and style.",
    },
    {
      title: "MULTIMEDIA",
      img: MultiImg,
      bg: "#C9CDD2",
      text: "We offer professional photo and video services that capture your best moments with creativity, precision, and style.",
    },
    {
      title: "SDE",
      img: SdeImg,
      bg: "#F2EDED",
      text: "We offer professional video services with same-day edit — capturing your moments and turning them into cinematic stories with creativity and style.",
    },
  ];

  const renderCard = (deal, isCarousel = false) => (
    <Paper
      key={deal.title}
      p="xl"
      radius={isCarousel ? 20 : 0}
      style={{
        background: deal.bg,
        // Responsive Height: 
        // On desktop, stick to a fixed height to align columns. 
        // On mobile carousel, let it grow naturally but min-height helps look uniform.
        height: "100%", 
        minHeight: isCarousel ? "550px" : "650px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Pushes button to bottom
        overflow: "hidden",
      }}
    >
      <Box>
        <Text
            fw={800}
            style={{
            fontSize: deal.title === "MULTIMEDIA" ? "clamp(2rem, 2.5vw, 2.5rem)" : "clamp(2.5rem, 3vw, 3rem)",
            marginBottom: "1rem",
            textAlign: "center",
            }}
        >
            {deal.title}
        </Text>

        <Image
            src={deal.img}
            alt={`${deal.title} Service`}
            radius={isCarousel ? "md" : 0}
            w="100%"
            h="auto"
            fit="contain"
            style={{ maxHeight: "250px", objectFit: "contain" }}
        />

        <Text
            mt="lg"
            style={{
            fontSize: "0.95rem",
            lineHeight: 1.5,
            textAlign: "center",
            }}
        >
            {deal.text}
        </Text>
      </Box>

      <Center mt="xl" mb="md">
        <Link
          to={`/${deal.title.toLowerCase()}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="outline"
            color="black"
            radius="xl"
            size="md"
            style={{ fontWeight: 700, borderWidth: "2px" }}
          >
            EXPLORE
          </Button>
        </Link>
      </Center>
    </Paper>
  );

  return (
    <section style={{ fontFamily: "'Sora', sans-serif", backgroundColor: bgColor }}>
      {/* TOP HEADER */}
      <Box 
        py="3rem" 
        style={{ 
            color: isSmallScreen ? "#000" : "#fff",
        }}
      >
        <Container size="xl">
          <Grid align="center" gutter="xl">
            {/* DEALS IMAGE TITLE */}
            <Grid.Col span={{ base: 12, md: 4 }}>
                <Center>
                    <Image 
                        src={Deals} 
                        alt="Deals" 
                        radius="md" 
                        fit="contain" 
                        w={{ base: "80%", md: "100%" }} 
                        maw={500} 
                    />
                </Center>
            </Grid.Col>

            {/* HEADER DESCRIPTION */}
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Text
                ta={{ base: "center", md: "left" }} // Center on mobile, Left on Desktop
                pl={{ md: "4rem" }} // Add padding only on desktop
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: 1.6,
                  opacity: 0.9,
                  maxWidth: "800px",
                  margin: "0 auto", // Center horizontally on mobile if needed
                  color: isSmallScreen ? "#000" : "#fff",
                }}
              >
                We offer professional photo services that capture your best moments with creativity, precision, and style.
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* MAIN DEALS GRID / CAROUSEL */}
      <Container size="xl" p={0} fluid={!isSmallScreen} style={{ paddingBottom: "4rem" }}>
        {isSmallScreen ? (
          <Box px="md">
            <Carousel 
                withIndicators 
                height="100%" 
                slideGap="md" 
                slideSize="85%" // Shows a peek of the next card
                align="center"
            >
              {deals.map((deal) => (
                <Carousel.Slide key={deal.title}>
                    {renderCard(deal, true)}
                </Carousel.Slide>
              ))}
            </Carousel>
          </Box>
        ) : (
          <Grid gutter={0} style={{ margin: 0, width: "100%" }}>
            {deals.map((deal) => (
              <Grid.Col key={deal.title} span={{ base: 12, sm: 6, md: 3 }}>
                {renderCard(deal)}
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </section>
  );
};

export default DealsSection;