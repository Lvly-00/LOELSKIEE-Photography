import React from "react";
import { Container, Grid, Text, Button, Image, Paper, Center } from "@mantine/core";
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

  // Set background color based on screen size
  const bgColor = isSmallScreen ? "#fff" : "#000";

  const deals = [
    {
      title: "PHOTO",
      img: PhotoImg,
      bg: "#95A795",
      text: "We offer professional video services that bring your stories to life with creativity, precision, and style.",
      buttonMargin: "3.9rem",
    },
    {
      title: "VIDEO",
      img: VideoImg,
      bg: "#CBAEB6",
      text: "We offer professional photo and video services that capture your best moments with creativity, precision, and style.",
      buttonMargin: "2.5rem",
    },
    {
      title: "MULTIMEDIA",
      img: MultiImg,
      bg: "#C9CDD2",
      text: "We offer professional photo and video services that capture your best moments with creativity, precision, and style.",
      buttonMargin: "3.3rem",
    },
    {
      title: "SDE",
      img: SdeImg,
      bg: "#F2EDED",
      text: "We offer professional video services with same-day edit — capturing your moments and turning them into cinematic stories with creativity and style.",
      buttonMargin: "1rem",
    },
  ];

  const renderCard = (deal, isCarousel = false) => (
    <Paper
      key={deal.title}
      p="xl"
      radius={isCarousel ? 20 : 0}
      style={{
        background: deal.bg,
        minHeight: "650px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Text
        fw={800}
        style={{
          fontSize: deal.title === "MULTIMEDIA" ? "2.5rem" : "3rem",
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
      />

      <Text
        mt="lg"
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        {deal.text}
      </Text>

      <Center mt={deal.buttonMargin}>
        <Link
          to={`/${deal.title.toLowerCase()}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="outline"
            color="black"
            radius="xl"
            style={{ fontWeight: 600 }}
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
      <div style={{ color: isSmallScreen ? "#000" : "#fff", paddingTop: "3rem" }}>
        <Container size="xl">
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Image src={Deals} alt="Deals" radius="md" fit="contain" w="100%" maw={600} mx="auto" />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Text
                visibleFrom="md"
                style={{
                  marginLeft: "10rem",
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                  opacity: 0.9,
                  maxWidth: "700px",
                  color: isSmallScreen ? "#000" : "#fff",
                }}
              >
                We offer professional photo services that capture your best moments with creativity, precision, and style.
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      {/* MAIN DEALS GRID / CAROUSEL */}
      <Container size="xl" style={{ padding: "2rem 0 4rem 0" }}>
        {isSmallScreen ? (
          <div style={{ padding: "1rem 2rem" }}>
            <Carousel withIndicators height="auto" slideGap="md">
              {deals.map((deal) => (
                <Carousel.Slide key={deal.title}>{renderCard(deal, true)}</Carousel.Slide>
              ))}
            </Carousel>
          </div>
        ) : (
          <Grid gutter={0}>
            {deals.map((deal) => (
              <Grid.Col key={deal.title} span={{ base: 12, md: 3 }}>
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
