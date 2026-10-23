import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/components/store/CartProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Heaven Autos - Premium Car Accessories & PPF Studio Pakistan",
  description:
    "Pakistan's #1 car accessories platform and certified PPF detailing studio. Precision fitment 7D/10D floor mats, QuikSlide magnetic shades, Bi-LED lights, Android panels, and studio PPF packages with nationwide express delivery.",
  openGraph: {
    title: "Heaven Autos - Premium Car Accessories & PPF Studio Pakistan",
    description:
      "Pakistan's #1 car accessories platform and certified PPF detailing studio. Precision fitment 7D/10D floor mats, QuikSlide magnetic shades, Bi-LED lights, Android panels, and studio PPF packages with nationwide express delivery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={`${plusJakarta.className} bg-white text-slate-900 antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
