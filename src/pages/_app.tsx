import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/**
 * Renders the main application component.
 *
 * @component
 * @param {AppProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className}`}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
