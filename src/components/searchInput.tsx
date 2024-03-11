export default function SearchInput({
  setQuery,
  submitHandler,
}: {
  setQuery: (query: string) => void;
  submitHandler: () => void;
}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-black-500 sr-only dark:text-linen-500"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-black-500 dark:text-raisinBlack-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-black-500 border border-black-300 rounded-lg bg-black-50 focus:ring-vanillia-500 focus:border-vanillia-500 dark:bg-linen-300 dark:border-linen-500 dark:placeholder-raisinBlack-300 dark:text-raisinBlack-500 dark:focus:ring-vanillia-500 dark:focus:border-vanillia-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-black-500 bg-tangerine-400 absolute end-2.5 bottom-2.5 dark:text-linen-500  hover:bg-tangerine-500 focus:ring-4 focus:outline-none focus:ring-tangerine-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-persianRed-600 dark:hover:bg-persianRed-700 dark:focus:ring-persianRed-800"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
