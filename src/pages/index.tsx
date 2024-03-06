import Head from "next/head";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/hero";
import SectionTitle from "@/components/sectionTitle";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";

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
        <title>Simple One-Pager-Template</title>
        <meta
          name="description"
          content="Simple One-Pager-Template based on Nextly"
        />
      </Head>
      <Header />
      <Hero />
      <SectionTitle pretitle="section pretitle" title="Section Title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam
        corrupti possimus porro quo ad modi suscipit cum, ipsa, repellendus
        error, repellat nobis voluptatibus inventore obcaecati neque sed quas
        nam.
      </SectionTitle>
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
