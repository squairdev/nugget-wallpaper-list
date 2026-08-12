import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wallpaper list",
  description: "An unofficial alternate to cowabun.ga/wallpapers",
  openGraph: {
    title: `Wallpaper list`,
    description: 'An unofficial alternate to cowabun.ga/wallpapers'
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net"/>
        <link rel="stylesheet" href="https://use.typekit.net/taj5rlj.css" as="style"/>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
