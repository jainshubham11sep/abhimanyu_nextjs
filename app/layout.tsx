import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abhimanyunirban.com"),
  title: "Abhimanyu Nirban",
  description:
    "Abhimanyu Nirban is a British businessman, entrepreneur, motivational speaker and online educator. Abhimanyu is an advocate for universal education and a committed philanthropist.",
  openGraph: {
    title: "Abhimanyu Nirban",
    description:
      "Abhimanyu Nirban is a British businessman, entrepreneur, motivational speaker and online educator. Abhimanyu is an advocate for universal education and a committed philanthropist.",
    type: "website",
    images: [
      {
        url: "/images/659d627fe1185fca5397afc7_Iman Gadzhi Share Image.jpg",
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
      "Abhimanyu Nirban is a British businessman, entrepreneur, motivational speaker and online educator.",
    images: ["/images/659d627fe1185fca5397afc7_Iman Gadzhi Share Image.jpg"],
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
