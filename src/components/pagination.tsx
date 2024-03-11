import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
  page,
  setPage,
  total,
  scrollToResultsRef,
}: {
  page: number;
  setPage: (page: number) => void;
  total: number;
  scrollToResultsRef: () => void;
}) {
  return (
    <>
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            type="button"
            onClick={() => {
              setPage(page - 1);
              scrollToResultsRef();
            }}
            className="relative inline-flex items-center rounded-l-md p-4 font-bold text-black-500 bg-darkCyan-300 dark:bg-linen-500 dark:text-raisinBlack-500 disabled:opacity-90 disabled:cursor-not-allowed hover:bg-darkCyan-400 dark:hover:bg-linen-600 transition duration-300 ease-in-out"
            disabled={page === 1}
          >
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            &nbsp;
            <span>Previous</span>
          </button>
          <span className="hidden md:inline-flex relative items-center px-10 py-4 text-black-500 bg-darkCyan-400 dark:bg-linen-600 dark:text-raisinBlack-500">
            Page {page} of {Math.ceil(total / 16)}
          </span>
          <button
            type="button"
            onClick={() => {
              setPage(page + 1);
              scrollToResultsRef();
            }}
            className="relative inline-flex items-center rounded-r-md p-4 font-bold text-black-500 bg-darkCyan-300 dark:bg-linen-500 dark:text-raisinBlack-500 disabled:opacity-90 disabled:cursor-not-allowed hover:bg-darkCyan-400 dark:hover:bg-linen-600 transition duration-300 ease-in-out"
            disabled={page * 16 >= total}
          >
            <span>Next</span>&nbsp;
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
      <p className="md:hidden p-4 text-black-500 dark:text-linen-500 text-center">
        Page {page} of {Math.ceil(total / 16)}
      </p>
    </>
  );
}
