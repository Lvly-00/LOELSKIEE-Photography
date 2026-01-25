import React, { useMemo } from "react";
import { Button } from "@mantine/core";
import classes from "../css/BookButton.module.css";

export const SmartBookButton = ({ subject, body }) => {
  const recipientEmail = "loelskiee@gmail.com";

  const subjectEncoded = encodeURIComponent(subject);
  const bodyEncoded = encodeURIComponent(body);

  const mailtoLink = `mailto:${recipientEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subjectEncoded}&body=${bodyEncoded}`;

  const buttonConfig = useMemo(() => {
    if (typeof navigator === "undefined") {
      return { href: mailtoLink };
    }

    const ua = navigator.userAgent.toLowerCase();

    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isChrome = ua.includes("chrome");
    const isEdge = ua.includes("edg");

    // iOS Safari: MUST use mailto
    if (isIOS) {
      return { href: mailtoLink };
    }

    // Desktop Chrome / Edge → Gmail Web
    if (isChrome || isEdge) {
      return {
        href: gmailLink,
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }

    // Default fallback
    return { href: mailtoLink };
  }, [gmailLink, mailtoLink]);

  return (
    <Button
      component="a"
      href={buttonConfig.href}
      target={buttonConfig.target}
      rel={buttonConfig.rel}
      variant="outline"
      size="md"
      radius="md"
      classNames={{ root: classes.root }}
    >
      BOOK NOW
    </Button>
  );
};

export const SmartBookButton2 = ({ subject, body }) => {
  const recipientEmail = "loelskiee@gmail.com";

  const subjectEncoded = encodeURIComponent(subject);
  const bodyEncoded = encodeURIComponent(body);

  const mailtoLink = `mailto:${recipientEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subjectEncoded}&body=${bodyEncoded}`;

  const buttonConfig = useMemo(() => {
    if (typeof navigator === "undefined") {
      return { href: mailtoLink };
    }

    const ua = navigator.userAgent.toLowerCase();

    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isChrome = ua.includes("chrome");
    const isEdge = ua.includes("edg");

    // iOS Safari: MUST use mailto
    if (isIOS) {
      return { href: mailtoLink };
    }

    // Desktop Chrome / Edge → Gmail Web
    if (isChrome || isEdge) {
      return {
        href: gmailLink,
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }

    // Default fallback
    return { href: mailtoLink };
  }, [gmailLink, mailtoLink]);

  return (
    <Button
      component="a"
      href={buttonConfig.href}
      target={buttonConfig.target}
      rel={buttonConfig.rel}
      variant="outline"
      size="md"
      radius="md"
      classNames={{ root: classes.root1 }}  // assuming you want root1 here
    >
      BOOK NOW
    </Button>
  );
};
