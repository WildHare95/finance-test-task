import React, {FC, useEffect, useRef, useState} from "react";

type TrendType = {
    price: number
}

const usePrevious = <T>(value: T) => {
    const ref = useRef<T>(value)
    useEffect(() => {
        ref.current = value
    },[value])
    return ref.current
}

const Trend: FC<TrendType> = ({price}) => {
    const prevState = usePrevious(price)
    return<span>
        {
            prevState < price ? "+" : "-"
        }
    </span>
}


export default Trend

// const [trend, setTrend] = useState<number>(0)
// const [isProfit, setIsProfit] = useState<boolean | null>(null)

// useEffect(() => {
//     setTrend((prevState) => {
//         if (prevState < price) {
//             setIsProfit(true)
//         } else {
//             setIsProfit(false)
//         }
//         return price
//     })
// }, [price])