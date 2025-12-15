import React, { useMemo } from "react";
import { Box, Container, Title, Text, Grid, List, Button, Divider } from "@mantine/core";

// --- 1. REUSABLE SMART BUTTON COMPONENT ---
// This handles the browser detection logic so we don't have to repeat it 4 times.
const SmartBookButton = ({ subject, body }) => {
    const recipientEmail = "loelskiee@gmail.com";

    // Encode details
    const subjectEncoded = encodeURIComponent(subject);
    const bodyEncoded = encodeURIComponent(body);

    // Links
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subjectEncoded}&body=${bodyEncoded}`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Browser Detection
    const buttonConfig = useMemo(() => {
        const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
        const isEdge = userAgent.includes('edg');
        const isChrome = userAgent.includes('chrome') && !isEdge && !userAgent.includes('opr');

        if (isChrome || isEdge) {
            return { href: gmailLink, target: "_blank", rel: "noopener noreferrer" };
        }
        return { href: mailtoLink, target: undefined, rel: undefined };
    }, [gmailLink, mailtoLink]);

    return (
        <Button
            component="a"
            href={buttonConfig.href}
            target={buttonConfig.target}
            rel={buttonConfig.rel}
            variant="outline"
            color="black"
            radius="md"
        >
            BOOK NOW
        </Button>
    );
};

// --- 2. HELPER TO GENERATE EMAIL BODY ---
const getEmailBody = (packageName, price) => {
    return `Hi Loelskiee Photography Team,

I would like to inquire about booking the ${packageName} package (${price}).

Here are my event details:
Date: 
Time: 
Location: 
Type of Event: 

Please let me know if this date is available.

Best regards,`;
};


function StudioPricing() {
    return (
        <Box
            py="clamp(4rem, 8vw, 6rem)"
            style={{ fontFamily: "'Sora', sans-serif" }}
        >
            <Container size="lg">

                {/* HEADER */}
                <Box ta="center" mb={50}>
                    <Title
                        order={1}
                        fw={700}
                        style={{
                            letterSpacing: 1,
                            fontSize: "clamp(2.5rem, 5vw, 4rem)"
                        }}
                    >
                        PRICING
                    </Title>
                    <div
                        style={{
                            width: 180,
                            height: 4,
                            background: "#5D6E5C",
                            margin: "15px auto 0",
                            borderRadius: 2,
                        }}
                    />
                </Box>

                {/* MAIN DIVIDER */}
                <Divider size="xl" color="#000000ff" mb={40} />

                {/* ----------------------------------------------------- */}
                {/* 1. PHOTO BOOTH – ₱4,999 */}
                {/* ----------------------------------------------------- */}
                <Grid gutter={30} p="0 30px" mb={80}>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" fw={400} mb={30} >PHOTO BOOTH</Text>
                        <Text
                            fw={800}
                            mb={20}
                            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }} // Standard Price Size
                        >
                            ₱4,999
                        </Text>
                        <Text
                            size="md"
                            mb={30}
                            style={{
                                maxWidth: 400,
                                lineHeight: 1.6,
                                fontSize: "clamp(0.9rem, 1.1vw, 1rem)"
                            }}
                        >
                            Get unlimited high-quality portraits and instant memories with our complete
                            photo booth package, handled by a professional photographer.
                        </Text>

                        {/* SMART BUTTON 1 */}
                        <SmartBookButton
                            subject="Booking: Photo Booth Package (₱4,999)"
                            body={getEmailBody("Photo Booth", "₱4,999")}
                        />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
                            PACKAGE
                        </Title>
                        <List spacing="md" size="md">
                            <List.Item>Complete Photo Booth Experience.</List.Item>
                            <List.Item>2 Hours of Unlimited Portrait Session.</List.Item>
                            <List.Item>Capture as many high-quality portraits as you like.</List.Item>
                            <List.Item>All edited images delivered via Google Drive.</List.Item>
                            <List.Item>Includes 1 professional photographer.</List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
                <Divider size="xl" color="#000000ff" mb={40} />


                {/* ----------------------------------------------------- */}
                {/* 2. PHOTO STUDIO – ₱7,999 */}
                {/* ----------------------------------------------------- */}
                <Grid gutter={30} p="0 30px" mb={80}>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" fw={400} mb={30} >PHOTO STUDIO</Text>
                        <Text
                            fw={800}
                            mb={20}
                            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }} // Standard Price Size
                        >
                            ₱7,999
                        </Text>
                        <Text
                            size="md"
                            mb={30}
                            style={{
                                maxWidth: 400,
                                lineHeight: 1.6,
                                fontSize: "clamp(0.9rem, 1.1vw, 1rem)"
                            }}
                        >
                            Enjoy a full studio-style booth setup with unlimited portraits,
                            professional lighting, and quick delivery—perfect for events that want
                            polished, high-quality photos.
                        </Text>

                        {/* SMART BUTTON 2 */}
                        <SmartBookButton
                            subject="Booking: Photo Studio Package (₱7,999)"
                            body={getEmailBody("Photo Studio", "₱7,999")}
                        />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
                            PACKAGE
                        </Title>
                        <List spacing="md" size="md">
                            <List.Item>Complete Studio Booth Experience.</List.Item>
                            <List.Item>2 Hours of Unlimited Portrait Session.</List.Item>
                            <List.Item>Capture as many portraits as you like.</List.Item>
                            <List.Item>All edited images delivered via Google Drive.</List.Item>
                            <List.Item>Includes 1 professional photographer.</List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
                <Divider size="xl" color="#000000ff" mb={40} />


                {/* ----------------------------------------------------- */}
                {/* 3. STUDIO BOOTH – ₱12,999 */}
                {/* ----------------------------------------------------- */}
                <Grid gutter={30} p="0 30px" mb={80}>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" fw={400} mb={30} >STUDIO BOOTH</Text>
                        <Text
                            fw={800}
                            mb={20}
                            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }} // Standard Price Size
                        >
                            ₱12,999
                        </Text>
                        <Text
                            size="md"
                            mb={30}
                            style={{
                                maxWidth: 400,
                                lineHeight: 1.6,
                                fontSize: "clamp(0.9rem, 1.1vw, 1rem)"
                            }}
                        >
                            A complete studio booth experience with unlimited portraits,
                            enhanced 4R photos, and quick digital delivery—handled by a
                            professional photographer and editor.
                        </Text>

                        {/* SMART BUTTON 3 */}
                        <SmartBookButton
                            subject="Booking: Studio Booth Package (₱12,999)"
                            body={getEmailBody("Studio Booth", "₱12,999")}
                        />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
                            PACKAGE
                        </Title>
                        <List spacing="md" size="md">
                            <List.Item>Complete Studio Booth Experience.</List.Item>
                            <List.Item>2 Hours of Unlimited Portrait Session.</List.Item>
                            <List.Item>Capture unlimited high-quality portraits.</List.Item>
                            <List.Item>Enhanced digital 4R photos with standee designs.</List.Item>
                            <List.Item>All edited images delivered via Google Drive.</List.Item>
                            <List.Item>Includes 1 professional photographer & 1 editor.</List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
                <Divider size="xl" color="#000000ff" mb={40} />


                {/* ----------------------------------------------------- */}
                {/* 4. LIVE FEED BROADCAST – ₱79,999 */}
                {/* ----------------------------------------------------- */}
                <Grid gutter={30} p="0 30px">
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Text size="md" fw={400} mb={30} >LIVE FEED BROADCAST</Text>
                        <Text
                            fw={800}
                            mb={20}
                            style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }} // Standard Price Size
                        >
                            ₱79,999
                        </Text>
                        <Text
                            size="md"
                            mb={30}
                            style={{
                                maxWidth: 400,
                                lineHeight: 1.6,
                                fontSize: "clamp(0.9rem, 1.1vw, 1rem)"
                            }}
                        >
                            Experience seamless live feed broadcast with a full multi-camera
                            setup and a professional team ensuring smooth real-time coverage.
                        </Text>

                        {/* SMART BUTTON 4 */}
                        <SmartBookButton
                            subject="Booking: Live Feed Broadcast (₱79,999)"
                            body={getEmailBody("Live Feed Broadcast", "₱79,999")}
                        />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Title order={2} fw={800} mt={60} mb={20} style={{ fontSize: "2.5rem" }}>
                            PACKAGE
                        </Title>
                        <List spacing="md" size="md">
                            <List.Item>Complete Live Feed Broadcast Experience.</List.Item>
                            <List.Item>3-Man Camera Setup.</List.Item>
                            <List.Item>Smooth & Reliable Coverage from Start to End.</List.Item>
                            <List.Item>Includes 3 Professional Videographers & 1 Main Live Feed Director.</List.Item>
                        </List>
                    </Grid.Col>
                </Grid>

            </Container>
        </Box>
    );
}

export default StudioPricing;