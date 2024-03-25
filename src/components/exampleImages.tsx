import Container from "@/components/layout/container";
import Loading from "@/components/loading";
import useAxios from "@/hooks/useAxios";
import ImageGallery from "@/components/gallery";

export default function ExampleImages() {
  const { data, isError, isLoading } = useAxios({
    url: "/api/pixabay",
    method: "post",
    body: JSON.stringify({
      q: "yellow flowers",
      p: 1,
    }),
  });

  if (isError) {
    return <Container>{isError}</Container>;
  }

  return (
    <div className="dark:bg-raisinBlack-700 py-10">
      <Container>
        <h2 id="example" className="text-4xl py-7">
          Example Result of a Pixabay-API call with query &quot;yellow
          flowers&quot;
        </h2>
        {isLoading ? <Loading /> : <ImageGallery images={data.images} />}
      </Container>
    </div>
  );
}
