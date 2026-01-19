import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Navbar from "../components/layout/Navbar";
import App from "../App";

describe("Navigation", () => {
    it("should render navbar links", () => {
        render(
            <HashRouter>
                <Navbar />
            </HashRouter>
        );

        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    });

    it("should navigate to contact page", async () => {
        const user = userEvent.setup();
        render(<App />);

        const contactLink = screen.getByText(/Contact/i, { selector: 'a' });
        expect(contactLink).toBeInTheDocument();

        await user.click(contactLink);

        // Verify we are on the contact page by looking for unique content
        const title = await screen.findByText(/CONTACT ME/i);
        expect(title).toBeInTheDocument();
        expect(screen.getByText(/\+91 9265763478/i)).toBeInTheDocument();
    });
});
