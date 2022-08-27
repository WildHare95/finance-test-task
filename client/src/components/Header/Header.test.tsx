import React from "react";
import {screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

import Header from "./Header"
import {renderWithProviders} from "src/store/test-utils";
import {setQuotasData} from "src/store/data/data-slice";

test("Header element input should exist and has state's values", () => {

    const { store } = renderWithProviders(<Header />)

    act(() => {
        store.dispatch(setQuotasData([
            {
                price: "232",
                ticker: "APPL",
                change: 1.2,
                change_percent: 21,
                dividend: 60,
                exchange: "NVSV",
                last_trade_time: "12.12.12",
                yield: 40
            }
        ]))
    });

    const input = screen.getByLabelText("Change fetching time:")

    userEvent.clear(input)
    userEvent.type(input, "10")
    userEvent.click(screen.getByText("Set time"))

    const state = store?.getState()
    expect(state.quotas.fetchInterval).toBe(10)

})
