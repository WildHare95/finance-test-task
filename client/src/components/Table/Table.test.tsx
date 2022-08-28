import React from "react";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {renderWithProviders} from "src/store/test-utils";
import Table from "src/components/Table/Table";
import {act} from "react-dom/test-utils";
import {setQuotasData} from "src/store/data/data-slice";


test("Table testing error", () => {
    renderWithProviders(<Table/>)

    const errScreen = screen.getByText("No internet connection")

    expect(errScreen).toBeInTheDocument()
})

test("Table testing data", () => {

    const { store, container } = renderWithProviders(<Table />)

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
            },
            {
                price: "232",
                ticker: "TS",
                change: 1.2,
                change_percent: 21,
                dividend: 60,
                exchange: "NVSV",
                last_trade_time: "12.12.12",
                yield: 40
            }
        ]))
    });

    const tableRows = container.getElementsByClassName("table-row")

    expect(tableRows).toHaveLength(2)
    expect(tableRows[0]).toBeInTheDocument()
    expect(tableRows[1]).toBeInTheDocument()

    const buttons = container.getElementsByClassName("button")

    userEvent.click(buttons[0])

    const state = store?.getState()

    expect(state.quotas.sampleOfQuotas).toHaveLength(1)
})
