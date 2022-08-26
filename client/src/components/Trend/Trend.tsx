import React, {FC} from "react";
import {usePreviousTrend} from "src/hooks/usePreviousTrend";

import "./Trend.styles.scss"

type TrendType = {
    price: number
}

const Trend: FC<TrendType> = ({price}) => {
    const prevState = usePreviousTrend(price)
    return<span>
        {
            prevState < price
                ? <span className="trend-arrow-up"/>
                :  <span className="trend-arrow-down"/>
        }
    </span>
}


export default Trend