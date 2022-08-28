import {ServerResponseQuotas} from "src/store/types";
import {sortBySample} from "src/components/Table/utils";

test("Testing sort function", () => {
    const mockData: ServerResponseQuotas[] = [
        {
            yield: 12,
            last_trade_time: "12",
            exchange: "12",
            dividend: 12,
            change_percent: 12,
            change: 12,
            price: "12",
            ticker: "ONE"
        },
        {
            yield: 12,
            last_trade_time: "12",
            exchange: "12",
            dividend: 12,
            change_percent: 12,
            change: 12,
            price: "12",
            ticker: "THREE"
        },
        {
            yield: 12,
            last_trade_time: "12",
            exchange: "12",
            dividend: 12,
            change_percent: 12,
            change: 12,
            price: "12",
            ticker: "TWO"
        }
    ]

    const mockSample: string[] = ["ONE", "TWO"]


    const result = sortBySample(mockData, mockSample)

    expect(result).toHaveLength(1)
    expect(result[0].ticker).toBe("THREE")
})