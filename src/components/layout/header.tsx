import Navbar from "@/components/layout/navbar";

/**
 * Renders the header component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 **/
export default function Header() {
  return (
    <header className="w-full dark:bg-raisinBlack-500">
      <Navbar />
    </header>
  );
}
