import { Box, Grid, Stack, Text, Button, Image, Paper } from "@mantine/core";

export default function StudioSection() {
  return (
    <Box py={50} px={40} bg="#ffffff">
      <Grid gutter="xl" align="center">
        {/* LEFT BLACK CARD */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper
            radius="lg"
            bg="#000"
            p={30}
            style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <Stack spacing={5}>
              <Text size={36} fw={900} c="white" lh={1.1}>
                LOEL <br />
                SKIEE <br />
                PHOT <br />
                OGRA <br />
                PHY
              </Text>
            </Stack>

            <Button
              variant="outline"
              radius="xl"
              color="white"
              size="md"
              styles={{
                root: { borderColor: "white", marginTop: 20 },
                label: { color: "white" },
              }}
            >
              STYLE
            </Button>
          </Paper>
        </Grid.Col>

        {/* MIDDLE IMAGE */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper radius="lg" p={0} style={{ overflow: "hidden" }}>
            <Image
              src="/mnt/data/ff4478b9-4b79-46c1-8172-4547df9111f9.png"
              alt="studio"
              fit="cover"
              height={380}
            />
          </Paper>
        </Grid.Col>

        {/* RIGHT SECTION TEXT */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack spacing={20}>
            <Text size={60} fw={900} lh={0.9}>
              STU <br /> DIO
            </Text>

            <Text size="md" c="dimmed">
              We offer professional photobooth and studio services perfect for birthdays,
              weddings, corporate events, and more. Whether you want fun, candid shots
              or elegant studio portraits, our team provides high-quality photos,
              creative backdrops, and instant prints to make your memories last a lifetime.
            </Text>

            <Button variant="outline" radius="xl" size="md">
              EXPLORE
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
