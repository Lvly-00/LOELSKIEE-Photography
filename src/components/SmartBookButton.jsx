import React, { useMemo } from "react";
import { Button } from "@mantine/core";
import classes from "../css/BookButton.module.css";

const getButtonConfig = (mailtoLink, gmailLink) => {
  if (typeof navigator === "undefined") {
    return { href: mailtoLink };
  }

  const ua = navigator.userAgent.toLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = /android/.test(ua);
  const isEdge = ua.includes("edg");
  const isChrome =
    ua.includes("chrome") && !isEdge && !isAndroid; // desktop chrome only

  // 📱 Mobile (iOS + Android): ALWAYS use mailto
  if (isIOS || isAndroid) {
    return { href: mailtoLink };
  }

  // 💻 Desktop Chrome / Edge → Gmail Web
  if (isChrome || isEdge) {
    return {
      href: gmailLink,
      target: "_blank",
      rel: "noopener noreferrer",
    };
  }

  // Fallback
  return { href: mailtoLink };
};

export const SmartBookButton = ({ subject, body }) => {
  const recipientEmail = "loelskiee@gmail.com";

  const subjectEncoded = encodeURIComponent(subject);
  const bodyEncoded = encodeURIComponent(body);

  const mailtoLink = `mailto:${recipientEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subjectEncoded}&body=${bodyEncoded}`;

  const buttonConfig = useMemo(
    () => getButtonConfig(mailtoLink, gmailLink),
    [mailtoLink, gmailLink]
  );

  return (
    <Button
      component="a"
      {...buttonConfig}
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

  const buttonConfig = useMemo(
    () => getButtonConfig(mailtoLink, gmailLink),
    [mailtoLink, gmailLink]
  );

  return (
    <Button
      component="a"
      {...buttonConfig}
      variant="outline"
      size="md"
      radius="md"
      classNames={{ root: classes.root1 }}
    >
      BOOK NOW
    </Button>
  );
};
