import { useRef, useState, useEffect } from "react";
import Container from "@/components/layout/container";
import Loading from "@/components/loading";
import useAxios from "@/hooks/useAxios";
import Pagination from "@/components/pagination";
import ImageGallery from "./gallery";

export default function SearchResults({
  query,
  page,
  setPage,
}: {
  query: string;
  page: number;
  setPage: (page: number) => void;
}) {
  const resultsRef = useRef<HTMLHeadingElement>(null);
  const scrollToResultsRef = () => {
    const resRef = resultsRef.current;
    if (resRef) {
      resRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { data, isError, isLoading } = useAxios({
    url: "/api/pixabay",
    method: "post",
    body: JSON.stringify({
      q: query,
      p: page,
    }),
  });

  if (isError) {
    return <Container>{isError}</Container>;
  }

  if (isLoading && data === null) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container className="p-0">
      {isLoading && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black-500/50 flex items-center justify-center z-50">
          <Loading />
        </div>
      )}
      <div className="hidden md:flex justify-between items-center">
        <h2
          className="text-2xl test-dark-500 dark:text-linen-500"
          ref={resultsRef}
        >
          Results for: {query}
        </h2>
        <Pagination
          page={page}
          setPage={setPage}
          total={data.total}
          scrollToResultsRef={scrollToResultsRef}
        />
      </div>
      <ImageGallery images={data.images} />
      <hr />
      <Pagination
        page={page}
        setPage={setPage}
        total={data.total}
        scrollToResultsRef={scrollToResultsRef}
      />
    </Container>
  );
}
