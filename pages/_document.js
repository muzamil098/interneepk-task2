import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./Navbar/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Navbar />
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
