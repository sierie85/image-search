import Head from "next/head";
import Layout from "../components/layout/layout";
import Container from "../components/layout/container";

export default function About() {
  return (
    <>
      <Head>
        <title>Image-Search</title>
        <meta
          name="description"
          content="Search for Images using the Pixabay API"
        />
      </Head>
      <Layout>
        <div className="min-h-96 g-gradient-to-b from-white-500 to-tangerine-50 dark:bg-gradient-to-b dark:from-raisinBlack-500 dark:to-raisinBlack-700">
          <Container>
            <h1 className="text-3xl">About</h1>
            <p>
              This is a sample application that demonstrates how to use the
              Pixabay API to search for images. This application is built with
              Next.js.
            </p>
          </Container>
        </div>
      </Layout>
    </>
  );
}
