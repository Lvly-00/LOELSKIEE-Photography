import React from "react";
import { Container, Grid, Text, Button, Image, Paper, Center, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";
import classes from '../css/ExploreButton.module.css';

// Images imports remain the same...
import PhotoImg from "../assets/images/Photo.png";
import VideoImg from "../assets/images/Video.png";
import MultiImg from "../assets/images/Multimedia.png";
import SdeImg from "../assets/images/SDE.png";
import Deals from "../assets/images/Deals.png";

const DealsSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 769px)");
  const bgColor = isSmallScreen ? "#fff" : "#000";

  const deals = [
    { title: "PHOTO", img: PhotoImg, bg: "#95A795", text: "We offer professional photo services that capture your best moments with creativity, precision, and style." },
    { title: "VIDEO", img: VideoImg, bg: "#CBAEB6", text: "We offer professional video services that bring your stories to life with creativity, precision, and style." },
    { title: "MULTIMEDIA", img: MultiImg, bg: "#C9CDD2", text: "We offer professional photo and video services that capture your best moments with creativity, precision, and style." },
    { title: "SDE", img: SdeImg, bg: "#F2EDED", text: "We offer professional video services with same-day edit — capturing your moments and turning them into cinematic stories with creativity and style." },
  ];

  const renderCard = (deal, isCarousel = false) => (
    <Paper
      key={deal.title}
      p="xl"
      radius={isCarousel ? 20 : 0}
      style={{
        background: deal.bg,
        height: "100%",
        minHeight: "600px", // Uniform height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      <Box>
        <Text
          fw={800}
          style={{
            fontSize: "clamp(2rem, 3vw, 3rem)", // Uniform Card Title
            marginBottom: "1.5rem",
            textAlign: "center",
            color: "#000"
          }}
        >
          {deal.title}
        </Text>

        <Image
          src={deal.img}
          alt={deal.title}
          fit="contain"
          h={250}
          w="100%"
          style={{ objectFit: "contain" }}
        />

        <Text
          mt="xl"
          style={{
            fontSize: "1rem", // Standard body size
            lineHeight: 1.6,
            textAlign: "center",
            color: "#000"
          }}
        >
          {deal.text}
        </Text>
      </Box>

      <Center mt="xl">
        <Button
          component={Link}
          to={`/${deal.title.toLowerCase()}`}
          variant="outline"
          radius="xl"
          size="md"
          classNames={{ root: classes.root }}
        >
          EXPLORE
        </Button>
      </Center>
    </Paper>
  );

  return (
    <section style={{ fontFamily: "'Sora', sans-serif", backgroundColor: bgColor }}>

      {/* HEADER SECTION */}
      <Box py="clamp(3rem, 5vw, 5rem)" style={{ color: isSmallScreen ? "#000" : "#fff" }}>
        <Container size="xl">
          <Grid align="center" gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Center>
                <Image src={Deals} alt="Deals" fit="contain" w={{ base: "60%", md: "100%" }} maw={400} />
              </Center>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Text
                ta={{ base: "center", md: "left" }}
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)", // Slightly larger intro text
                  lineHeight: 1.6,
                  maxWidth: "700px",
                  margin: "0 auto",
                  opacity: 0.9
                }}
              >
                We offer various services including photography, videography, and same-day edit — capturing every moment with creativity and passion.              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* CAROUSEL / GRID */}
      <Container size="xl" p={0} fluid={!isSmallScreen} style={{ paddingBottom: "4rem" }}>
        {isSmallScreen ? (
          <Box px="md">
            <Carousel withIndicators height="100%" slideGap="md" slideSize="85%" align="center">
              {deals.map((deal) => (
                <Carousel.Slide key={deal.title}>{renderCard(deal, true)}</Carousel.Slide>
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