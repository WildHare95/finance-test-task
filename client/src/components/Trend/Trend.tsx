import React, {FC} from "react";
import {usePreviousTrend} from "src/hooks/usePreviousTrend";

type TrendType = {
    price: number
}

const Trend: FC<TrendType> = ({price}) => {
    const prevState = usePreviousTrend(price)
    return<span>
        {
            prevState < price ? "+" : "-"
        }
    </span>
}


export default Trend