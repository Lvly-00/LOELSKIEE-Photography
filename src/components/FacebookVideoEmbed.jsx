import React, { useEffect } from "react";
import { AspectRatio } from "@mantine/core"; // Or your preferred aspect ratio component

function FacebookVideoEmbed({ url, width = "100%", height = "100%", showCaptions = false }) {
  useEffect(() => {
    // Load Facebook SDK
    if (!window.FB) {
      ((d, s, id) => {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    } else {
      window.FB.XFBML.parse(); // Re-parse if SDK already loaded
    }
  }, []);

  return (
    <AspectRatio ratio={16 / 9} style={{ width: "100%", maxWidth: "500px" }}>
      <div
        className="fb-video"
        data-href={url}
        data-width="500"          // Same width as your iframe
        data-show-captions={showCaptions}
        data-allowfullscreen="true"
        data-autoplay="true"      // FB may ignore autoplay
      ></div>
    </AspectRatio>
  );
}

export default FacebookVideoEmbed;
