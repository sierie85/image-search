import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home", () => {
  test("renders the get started message", () => {
    render(<Home />);
    const messageElement = screen.getByText("Get started by editing");
    expect(messageElement).toBeInTheDocument();
  });

  test("renders the Next.js logo", () => {
    render(<Home />);
    const logoElement = screen.getByAltText("Next.js Logo");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders the navigation links", () => {
    render(<Home />);
    const docsLink = screen.getByText("Docs");
    const learnLink = screen.getByText("Learn");
    const templatesLink = screen.getByText("Templates");
    const deployLink = screen.getByText("Deploy");

    expect(docsLink).toBeInTheDocument();
    expect(learnLink).toBeInTheDocument();
    expect(templatesLink).toBeInTheDocument();
    expect(deployLink).toBeInTheDocument();
  });
});
