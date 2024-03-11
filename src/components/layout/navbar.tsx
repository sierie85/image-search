import Link from "next/link";
import ThemeChanger from "@/components/layout/DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

/**
 * Renders the navbar component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 **/
const Navbar = () => {
  const navigation = [
    { text: "Search", link: "/search" },
    { text: "About", link: "/about" },
  ];

  return (
    <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0 border-b border-darkCyan-600 dark:border-white-600">
      {/* Logo  */}
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <span className="flex items-center space-x-2 text-2xl font-medium text-darkCyan-700 dark:text-linen-500">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                  <span>Image-Search</span>
                </span>
              </Link>

              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 ml-auto text-black-500 rounded-md lg:hidden hover:text-darkCyan-600 focus:text-darkCyan-600 focus:bg-indigo-100 focus:outline-none dark:text-white-500 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="w-full px-4 py-2 -ml-4 text-darkCyan-700 rounded-md dark:text-vanilla-500 hover:text-darkCyan-600 focus:text-darkCyan-600 focus:bg-indigo-100 dark:focus:bg-black-800 focus:outline-none"
                    >
                      {item.text}
                    </Link>
                  ))}
                </>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>

      {/* menu  */}
      <div className="hidden text-center lg:flex lg:items-center">
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {navigation.map((menu, index) => (
            <li className="mr-3 nav__item" key={index}>
              <Link
                href={menu.link}
                className="inline-block px-4 py-2 text-lg font-normal text-darkCyan-700 no-underline rounded-md dark:text-vanilla-300 dark:hover:underline hover:text-darkCyan-600 focus:text-darkCyan-600 focus:bg-indigo-100 focus:outline-none dark:focus:bg-black-800"
              >
                {menu.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
