import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "../components/theme-provider";

import Footer from "../components/Footer";
import Header from "../components/Header";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // Primary SEO Title
      {
        title: "Cascading Grace | Faith-Guided Adult Foster Care Home",
      },

      // SEO Description
      {
        name: "description",
        content:
          "Cascading Grace is a faith-guided Adult Foster Care home offering compassionate, family-centered support for older adults and individuals with developmental disabilities. A place of peace, dignity, and meaningful connection.",
      },

      // Keywords for ranking
      {
        name: "keywords",
        content:
          "Cascading Grace, adult foster care, adult foster care home, AFC home, faith-based care, senior care, disability support, assisted living alternative, compassionate care home, family-centered care, developmental disability care, elder care home, Michigan care home, faith-guided care, residential care home",
      },

      // Author
      { name: "author", content: "Cascading Grace" },

      // Open Graph
      {
        property: "og:title",
        content: "Cascading Grace | Faith-Guided Adult Foster Care Home",
      },
      {
        property: "og:description",
        content:
          "A peaceful, nurturing Adult Foster Care home rooted in compassion, dignity, connection, and faith. Discover care that feels like family.",
      },
      {
        property: "og:image",
        content: "/og-image.png", // replace when you have real OG banner
      },
      { property: "og:url", content: "https://cascadinggrace.com" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Cascading Grace" },

      // Twitter Metadata
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Cascading Grace | Faith-Guided Adult Foster Care Home",
      },
      {
        name: "twitter:description",
        content:
          "A small, nurturing home where compassion, connection, and dignity guide every moment of care.",
      },
      {
        name: "twitter:image",
        content: "/assets/image/LOGO-CascadingGrace.png",
      },

      // App / UI Meta
      { name: "theme-color", content: "#173B7A" }, // brand Deep Navy
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "apple-mobile-web-app-title", content: "Cascading Grace" },
    ],

    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "canonical", href: "https://cascadinggrace.com" },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
