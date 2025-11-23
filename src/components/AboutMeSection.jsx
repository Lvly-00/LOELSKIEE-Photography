import React from "react";
import { Text } from "@mantine/core";

const AboutMeSection = () => {
  return (
    <section
      style={{
        padding: "2rem 0 6rem 0",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      {/* TOP LABEL + LINE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "clamp(2rem, 6vw, 3rem)",
        }}
      >
        {/* LEFT — Badge */}
        <div
          style={{
            padding: "clamp(0.2rem, 1vw, 0.2rem) clamp(1.5rem, 5vw, 4.5rem)",
            border: "clamp(1px, 0.3vw, 3px) solid #000",
            borderRadius: "60px",
            fontWeight: 700,
            fontSize: "clamp(.5rem, 2.5vw, 2.5rem)",
            whiteSpace: "nowrap",
            marginLeft: "clamp(1rem, 5vw, 10rem)",
          }}
        >
          2024
        </div>

        {/* RIGHT — Line */}
        <div
          style={{
            height: "clamp(.5rem, 1.5vw, 1rem)",
            background: "#000",
            width: "70%",
          }}
        ></div>
      </div>

      {/* MAIN ABOUT ME SECTION */}
      <div
        style={{
          background: "#000",
          padding: "3rem clamp(1rem, 5vw, 10rem)",
          color: "#fff",
          width: "100%",
          marginBottom: "clamp(2rem, 6vw, 3rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text
          fw={800}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            marginBottom: "2rem",
          }}
        >
          ABOUT ME
        </Text>

        <Text
          style={{
            fontSize: "clamp(.8rem, 2vw, 1.3rem)",
            lineHeight: 2,
            opacity: 0.9,
            maxWidth: "900px",
          }}
        >
          Hi, I'm Loel Ludovice, a freelance photographer based in Manila.
          I've been capturing moments professionally since 2024, but my
          passion for photography began during the pandemic—when I found
          beauty in stillness and everyday life. I've grown from humble
          beginnings to working with over 200 clients. My style leans toward
          natural, candid, and storytelling visuals, with a focus on authentic
          emotion and detail. Whether it's portraits, events, or street scenes,
          I aim to create images that speak and connect.
        </Text>
      </div>

      {/* BOTTOM LINE + PHOTOGRAPHER + STYLE BUTTON */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(0.5rem, 5vw, 5rem)",
          flexWrap: "nowrap",
        }}
      >
        {/* LEFT — Line */}
        <div
          style={{
            height: "clamp(.3rem, 1.5vw, 2rem)",
            background: "#000",
            width: "50%",
          }}
        ></div>

        {/* CENTER — PHOTOGRAPHER TEXT */}
        <Text
          fw={900}
          style={{
            fontSize: "clamp(1.5rem, 5vw, 5rem)",
            letterSpacing: "2px",
            whiteSpace: "nowrap",
          }}
        >
          PHOTOGRAPHER
        </Text>

        {/* RIGHT — STYLE OUTLINE BUTTON */}
        <div
          style={{
            border: "clamp(1px, 0.3vw, 3px) solid #000",
            padding: "clamp(0.2rem, 1vw, 0.2rem) clamp(1.5rem, 5vw, 4.5rem)",
            borderRadius: "60px",
            fontWeight: 700,
            fontSize: "clamp(.5rem, 2.5vw, 2.5rem)",
            whiteSpace: "nowrap",
          }}
        >
          STYLE
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
