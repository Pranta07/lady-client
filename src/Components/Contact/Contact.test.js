import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "./Contact";

it("should render Submit text on button and enabled", async () => {
    render(<Contact />);

    expect(screen.getByText("Submit")).toBeEnabled();
    expect(screen.getByText("Submit")).toBeInTheDocument();
});
