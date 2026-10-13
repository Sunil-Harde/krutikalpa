export const dynamic = "force-static";

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KrutiKalpa Solutions",
    short_name: "KrutiKalpa",
    description:
      "Transforming Businesses Through Technology. Web applications, AI agents, chatbots and custom software solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#FF6B0A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type:  "image/x-icon",
      },
    ],
  };
}
