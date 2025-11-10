import React from "react";
import { Container, Grid, Text, Button, Image, Paper, Center } from "@mantine/core";

import PhotoImg from "../assets/images/Photo.png";
import VideoImg from "../assets/images/Video.png";
import MultiImg from "../assets/images/Multimedia.png";
import SdeImg from "../assets/images/SDE.png";
import Deals from "../assets/images/Deals.png";

const DealsSection = () => {
  return (
    <section
      style={{
        fontFamily: "'Sora', sans-serif",
        background: "#000",
      }}
    >
      {/* TOP BLACK HEADER */}
      <div
        style={{
          color: "#fff",
          paddingTop: "3rem",
        }}
      >
        <Container size="xl">
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Image
                src={Deals}
                alt="Deals"
                radius="md"
                fit="contain"
                w="100%"
                maw={300}
                mx="auto"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Text
                style={{
                  marginLeft: "10rem",
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                  opacity: 0.9,
                  maxWidth: "700px",
                }}
              >
                We offer professional photo services that capture your best moments
                with creativity, precision, and style.
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      {/* MAIN DEALS GRID */}
      <Container size="xl" style={{ padding: "2rem 0 4rem 0" }}>
        <Grid gutter={0}>

          {/* PHOTO */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Paper
              p="2xl"
              radius={0}
              style={{
                background: "#95A795",
                minHeight: "550px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                fw={800}
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                PHOTO
              </Text>

              <Image
                src={PhotoImg}
                alt="Photo Service"
                radius="md"
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
                We offer professional video services that bring your stories to
                life with creativity, precision, and style.
              </Text>

              <Center mt="3.9rem">
                <Button variant="outline" color="black" radius="xl" style={{ fontWeight: 600 }}>
                  EXPLORE
                </Button>
              </Center>
            </Paper>
          </Grid.Col>

          {/* VIDEO */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Paper
              p="2xl"
              radius={0}
              style={{
                background: "#CBAEB6",
                minHeight: "550px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                fw={800}
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                VIDEO
              </Text>

              <Image
                src={VideoImg}
                alt="Video Service"
                radius="md"
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
                We offer professional photo and video services that capture your best
                moments with creativity, precision, and style.
              </Text>

              <Center mt="2.5rem">
                <Button variant="outline" color="black" radius="xl" style={{ fontWeight: 600 }}>
                  EXPLORE
                </Button>
              </Center>
            </Paper>
          </Grid.Col>

          {/* MULTIMEDIA */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Paper
              p="2xl"
              radius={0}
              style={{
                background: "#C9CDD2",
                minHeight: "550px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                fw={800}
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                MULTIMEDIA
              </Text>

              <Image
                src={MultiImg}
                alt="Multimedia Service"
                radius="md"
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
                We offer professional photo and video services that capture your best
                moments with creativity, precision, and style.
              </Text>

              <Center mt="3.3rem">
                <Button variant="outline" color="black" radius="xl" style={{ fontWeight: 600 }}>
                  EXPLORE
                </Button>
              </Center>
            </Paper>
          </Grid.Col>

          {/* SDE */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Paper
              p="2xl"
              radius={0}
              style={{
                background: "#F2EDED",
                minHeight: "550px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                fw={800}
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                SDE
              </Text>

              <Image
                src={SdeImg}
                alt="SDE Service"
                radius="md"
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
                We offer professional video services with same-day edit — capturing
                your moments and turning them into cinematic stories with creativity and style.
              </Text>

              <Center mt="1rem">
                <Button variant="outline" color="black" radius="xl" style={{ fontWeight: 600 }}>
                  EXPLORE
                </Button>
              </Center>
            </Paper>
          </Grid.Col>

        </Grid>
      </Container>
    </section>
  );
};

export default DealsSection;
