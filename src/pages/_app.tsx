import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { globalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { Teko } from "next/font/google";

const mainFont = Teko({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-teko",
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main
        className={mainFont.className}
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          minHeight: "100vh",
        }}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
