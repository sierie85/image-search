import Link from "next/link";

/**
 * Renders the hero component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 **/
const Hero = () => {
  return (
    <>
      <div className="mx-auto flex flex-wrap bg-gradient-to-b from-white-500 to-tangerine-50 dark:bg-gradient-to-b dark:from-raisinBlack-500 dark:to-raisinBlack-700">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-black-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-linen-500 animate-scaleIn">
            Image-Search
          </h1>
          <p className="w-1/2 py-7 text-center text-xl leading-normal text-black-500 lg:text-2xl xl:text-3xl dark:text-linen-500">
            Utilize the powerful Pixabay API to search for compelling images.
            This sample use case demonstrates how to seamlessly integrate an
            external API with Next.js, a popular framework for building web
            applications. Keep in mind that this application is for
            demonstration purposes only.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-5">
            <a
              href="#example"
              className="px-8 py-4 text-lg font-medium text-center text-black-500 bg-darkCyan-400 dark:bg-linen-500 dark:text-raisinBlack-500 rounded-md "
            >
              See example search result
            </a>
            <Link
              href="/search"
              className="px-8 py-4 text-lg font-medium text-center text-black-500 bg-tangerine-400 dark:bg-persianRed-500 dark:text-linen-500 rounded-md "
            >
              Search for images
            </Link>
          </div>

          <div className="grid place-content-center mt-20">
            <a
              href="#example"
              className="animate-bounce bg-darkCyan-400 dark:bg-linen-500 p-2 w-10 h-10 ring-1 ring-raisinBlack-900/5 shadow-lg rounded-full flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-black-500 dark:text-raisinBlack-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
