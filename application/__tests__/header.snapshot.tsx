import { act, render } from "@testing-library/react";
import { useSession } from "next-auth/react";
import Header from "components/header";

jest.mock("next-auth/react");
describe("The Header component", () => {
    it("renders unchanged when logged out", async () => {
        (useSession as jest.Mock).mockReturnValueOnce({
            data: { user: {} },
            status: "unauthenticated",
        });
        let container: HTMLElement | undefined = undefined;
        await act(async () => {
            container = render(<Header />).container;
        });
        expect(container).toMatchSnapshot();
    });

    it("renders unchanged when logged in", async () => {
        (useSession as jest.Mock).mockReturnValueOnce({
            data: {
                user: {
                    name: "test user",
                    fdlst_private_userId: "rndmusr",
                },
            },
            status: "authenticated",
        });
        let container: HTMLElement | undefined = undefined;
        await act(async () => {
            container = render(<Header />).container;
        });
        expect(container).toMatchSnapshot();
    });
});
