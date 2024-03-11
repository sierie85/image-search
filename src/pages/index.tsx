import Head from "next/head";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/hero";
import ExampleImages from "@/components/exampleImages";

/**
 * Renders the main application component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Image-Search</title>
        <meta
          name="description"
          content="Search for Images using the Pixabay API"
        />
      </Head>
      <Header />
      <Hero />
      <ExampleImages />
      <Footer />
    </>
  );
}
