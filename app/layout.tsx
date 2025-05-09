import type { Metadata } from "next";
import { londrina_outline, monomaniac_one, darker_grotesque } from '@/app/fonts';
import "./globals.css";
import Footer from '../components/footer/footer';

export const metadata: Metadata = {
  title: "Chousein Kechagia",
  description: "Chousein Kechagia's personal website",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${londrina_outline.className} ${monomaniac_one.className} ${darker_grotesque.className}`}>

        <main id='main'>
          {children}
        </main>

        <Footer />


      </body>
    </html>
  );
}
