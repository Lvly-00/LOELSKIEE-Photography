import React from "react";
import { Text, Box } from "@mantine/core";

const AboutMeSection = () => {
  return (
    <section style={{ padding: "4rem 0 6rem 0", fontFamily: "'Sora', sans-serif" }}>
      
      {/* 1. YEAR BADGE ROW */}
      <Box style={{ display: "flex", alignItems: "center", marginBottom: "3rem" }}>
        <div
          style={{
            padding: "0.5rem 2rem",
            border: "2px solid #000",
            borderRadius: "50px",
            fontWeight: 700,
            fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
            marginLeft: "clamp(1rem, 10vw, 10rem)",
            marginRight: "1rem",
            whiteSpace: "nowrap"
          }}
        >
          2024
        </div>
        <div style={{ height: "10px", background: "#000", width: "100%" }}></div>
      </Box>

      {/* 2. BLACK CONTENT BOX */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <Text fw={800} style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", marginBottom: "2rem" }}>
          ABOUT ME
        </Text>

        <Text
          style={{
            fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)",
            lineHeight: 1.8,
            opacity: 0.9,
            maxWidth: "800px",
          }}
        >
          Hi, I'm Loel Ludovice, a freelance photographer based in Manila.
          I've been capturing moments professionally since 2024, but my
          passion for photography began during the pandemic—when I found
          beauty in stillness and everyday life. I've grown from humble
          beginnings to working with over 200 clients. My style leans toward
          natural, candid, and storytelling visuals, with a focus on authentic
          emotion and detail.
        </Text>
      </div>

      {/* 3. PHOTOGRAPHER TITLE ROW */}
      <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ height: "10px", background: "#000", flexGrow: 1 }}></div>
        
        <Text fw={900} style={{ fontSize: "clamp(1.8rem, 4vw, 4rem)", letterSpacing: "-1px" }}>
          PHOTOGRAPHER
        </Text>

        <div
          style={{
            border: "2px solid #000",
            padding: "0.5rem 2rem",
            borderRadius: "50px",
            fontWeight: 700,
            fontSize: "clamp(0.8rem, 1.2vw, 1.2rem)",
            marginRight: "clamp(1rem, 5vw, 5rem)",
            whiteSpace: "nowrap"
          }}
        >
          STYLE
        </div>
      </Box>
    </section>
  );
};

export default AboutMeSection;