import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/layout/layout";
import Container from "@/components/layout/container";
import SearchInput from "@/components/searchInput";
import SearchResults from "@/components/searchResults";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [squery, setSQuery] = useState<string>("");

  const submitHandler = () => {
    setPage(1);
    setSQuery(query);
  };

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
        <Container>
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-black-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-linen-500 mb-5">
            Search
          </h1>
          <div className="w-100">
            <SearchInput setQuery={setQuery} submitHandler={submitHandler} />
          </div>
          {squery.length > 0 && (
            <SearchResults query={squery} page={page} setPage={setPage} />
          )}
        </Container>
      </Layout>
    </>
  );
}
