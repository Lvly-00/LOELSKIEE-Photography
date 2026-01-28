import React from "react";
import { Container, Grid, Text, Button, Image, Paper, Center, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";
import classes from '../css/ExploreButton.module.css';

import PhotoImg from "../assets/images/Photo.png";
import VideoImg from "../assets/images/Video.png";
import MultiImg from "../assets/images/Multimedia.png";
import SdeImg from "../assets/images/SDE.png";
import Studio from "../assets/images/StudioDeal.png";

const DealsComponent = ({ show = ["PHOTO", "VIDEO", "MULTIMEDIA", "SDE"] }) => {
    const isSmallScreen = useMediaQuery("(max-width: 769px)");
    const bgColor = isSmallScreen ? "#fff" : "#000";

    const deals = [
        { title: "PHOTO", img: PhotoImg, bg: "#95A795", text: "We offer professional photo services that capture your best moments with creativity, precision, and style." },
        { title: "VIDEO", img: VideoImg, bg: "#CBAEB6", text: "We offer professional video services that bring your stories to life with creativity, precision, and style." },
        { title: "MULTIMEDIA", img: MultiImg, bg: "#C9CDD2", text: "We offer professional photo and video services that capture your best moments with creativity, precision, and style." },
        { title: "SDE", img: SdeImg, bg: "#F2EDED", text: "We offer professional video services with same-day edit — capturing your moments and turning them into cinematic stories with creativity and style." },
        { title: "STUDIO", img: Studio, bg: "#fdf7e4", text: "We provide professional photobooth and studio services for birthdays, weddings, corporate events, and more—delivering high-quality photos, creative backdrops, and instant prints to capture memories that last." },
    ];

    const filteredDeals = deals.filter((deal) => show.includes(deal.title));

    const renderCard = (deal, isCarousel = false) => (
        <Paper
            key={deal.title}
            p="xl"
            radius={isCarousel ? 20 : 0}
            style={{
                background: deal.bg,
                height: "100%",
                minHeight: "600px",
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
                        fontSize: "clamp(2rem, 3vw, 3rem)",
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
                        fontSize: "1rem",
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
        <section style={{ fontFamily: "'Sora', sans-serif"}}>
            {/* HEADER SECTION stays unchanged */}

            <Container size="xl" p={0} fluid={!isSmallScreen} style={{ paddingBottom: "4rem" }}>
                {isSmallScreen ? (
                    <Box px="md">
                        <Carousel withIndicators height="100%" slideGap="md" slideSize="85%" align="center">
                            {filteredDeals.map((deal) => (
                                <Carousel.Slide key={deal.title}>
                                    {renderCard(deal, true)}
                                </Carousel.Slide>
                            ))}
                        </Carousel>
                    </Box>
                ) : (
                    <Grid gutter={0} style={{ margin: 0, width: "100%" }}>
                        {filteredDeals.map((deal) => (
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

export default DealsComponent;