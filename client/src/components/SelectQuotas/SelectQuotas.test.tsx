import React from "react";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

import {renderWithProviders} from "src/store/test-utils";
import SelectQuotas from "src/components/SelectQuotas/SelectQuotas";
import { setSampleOfQuotas } from "src/store/data/data-slice";


test("Select elements should working", async () => {
    const { store } = renderWithProviders(<SelectQuotas />)

    act(() => {
        store?.dispatch(setSampleOfQuotas(["APPL", "SOME", "ONE"]))
    });

    const state = store?.getState()

    const button = screen.queryAllByRole<HTMLButtonElement>("button")

    expect(state.quotas.sampleOfQuotas).toHaveLength(3)
    expect(button).toHaveLength(3)

    expect(button[0]).toBeInTheDocument()
    expect(button[1]).toBeInTheDocument()
    expect(button[2]).toBeInTheDocument()

    userEvent.click(button[0])
    userEvent.click(button[1])
    userEvent.click(button[2])

    const stateAfterClicks = store?.getState()
    expect(stateAfterClicks.quotas.sampleOfQuotas.length).toBe(0)

})
