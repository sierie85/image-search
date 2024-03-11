import { Html, Head, Main, NextScript } from "next/document";

/**
 * Custom Document component for Next.js.
 * This component is used to override the default Next.js Document component.
 * It provides the basic structure of the HTML document and includes the header, main content, footer, and Next.js scripts.
 */
export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
