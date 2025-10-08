import React from "react";
import { render, screen } from "@testing-library/react";

import StuDetailsPage from "../StuDetailsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders stuDetails page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <StuDetailsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("stuDetails-datatable")).toBeInTheDocument();
    expect(screen.getByRole("stuDetails-add-button")).toBeInTheDocument();
});
