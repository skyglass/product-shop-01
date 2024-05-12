import React from "react";

import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";

import AuthElement from "components/header/auth-element";

jest.mock("next-auth/react");

describe("The Auth Element", () => {
    it("renders the Sign in button correctly when signed out", async () => {
        (useSession as jest.Mock).mockReturnValueOnce({
            data: { user: {} },
            status: "unauthenticated",
        });

        render(<AuthElement />);
        expect(screen.getByText("Sign in"));
    });

    it("renders the greeting correctly when signed in", async () => {
        (useSession as jest.Mock).mockReturnValueOnce({
            data: {
                user: {
                    name: "test user",
                    fdlst_private_userId: "rndmusr",
                },
            },
            status: "authenticated",
        });

        render(<AuthElement />);
        expect(screen.getByText("test user"));
    });

    it("renders the Sign out button correctly when signed in", async () => {
        (useSession as jest.Mock).mockReturnValueOnce({
            data: {
                user: {
                    name: "test user",
                    fdlst_private_userId: "rndmusr",
                },
            },
            status: "authenticated",
        });

        render(<AuthElement />);
        expect(screen.getByText("Sign out"));
    });

    it("renders the wish list button correctly when signed in", async () => {
        (useSession as jest.Mock).mockReturnValueOnce({
            data: {
                user: {
                    name: "test user",
                    fdlst_private_userId: "rndmusr",
                },
            },
            status: "authenticated",
        });

        render(<AuthElement />);
        expect(screen.getByText("Your wish list"));
    });
});
