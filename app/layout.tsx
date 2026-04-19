import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abhimanyunirban.com"),
  title: "Abhimanyu Nirban",
  description:
    "Abhimanyu Nirban is a 26-year-old Indian entrepreneur from Sikar, Rajasthan. Founder of Bharat Innovations — India's first AI marketing agency — and creator of the RASA Framework.",
  openGraph: {
    title: "Abhimanyu Nirban",
    description:
      "Abhimanyu Nirban is a 26-year-old Indian entrepreneur from Sikar, Rajasthan. Founder of Bharat Innovations — India's first AI marketing agency — and creator of the RASA Framework.",
    type: "website",
    images: [
      {
        url: "/images/media/abhimanyu_nirban.PNG",
        width: 1200,
        height: 630,
        alt: "Abhimanyu Nirban",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhimanyu Nirban",
    description:
      "Abhimanyu Nirban — founder of India's first AI marketing agency, Bharat Innovations, and creator of the RASA Framework.",
    images: ["/images/media/abhimanyu_nirban.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Kalnia:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
