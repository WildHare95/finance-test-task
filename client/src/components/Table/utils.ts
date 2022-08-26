import {ServerResponseQuotas} from "src/store/types";

export const sortBySample = (data: ServerResponseQuotas[], sample: string[]) => {
    return [...data].reduce((acc, curr) => {
        const isInArr = sample.every(item => item !== curr.ticker)
        if (isInArr) {
            acc = [...acc, curr]
        }
        return acc
    }, [] as ServerResponseQuotas[])
}