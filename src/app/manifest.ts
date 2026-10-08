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
    background_color: "#050505",
    theme_color: "#F97316",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
