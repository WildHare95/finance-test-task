import React, {useEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import "./Table.styles.scss"

import {setSampleOfQuotas} from "src/store/data/data-slice";
import {useAppDispatch, useAppSelector} from "src/store/hooks";
import {selectQuoteData, selectSampleOfQuotas} from "src/store/selectors";
import {ServerResponseQuotas} from "src/store/types";

import {sortBySample} from "./utils";
import Trend from "src/components/Trend/Trend";


const Table = () => {
    const [data, setData] = useState<ServerResponseQuotas[]>([])

    const dispatch = useAppDispatch()

    const quotasData = useAppSelector(selectQuoteData)
    const sample = useAppSelector(selectSampleOfQuotas)

    useEffect(() => {
        setData(sortBySample(quotasData, sample))
    }, [quotasData, sample])

    return <div className="container">
        <div className="table">
            <li className="table-header">
                <div>Ticker</div>
                <div>Exchange</div>
                <div>Price</div>
                <div>Change Percent</div>
                <div>Dividend</div>
                <div>Yield</div>
            </li>
            <TransitionGroup component="ul">
                {
                    data.map((item) => {
                        return <CSSTransition
                            key={item.ticker}
                            timeout={700}
                            classNames="table-row"
                        >
                            <li className="table-row">
                                <div className="col col-1">{item.ticker}</div>
                                <div className="col col-2">{item.exchange}</div>
                                <div className="col col-3">
                                    {item.price}
                                    <Trend price={+item.price}/>
                                </div>
                                <div className="col col-4">{item.change_percent}</div>
                                <div className="col col-5">{item.dividend}</div>
                                <div className="col col-6">
                                    {item.yield}
                                    <div
                                        className="button"
                                        onClick={() => {
                                            dispatch(setSampleOfQuotas([...sample, item.ticker]))
                                        }}/>
                                </div>
                            </li>
                        </CSSTransition>
                    })
                }
            </TransitionGroup>
        </div>
</div>
}

export default Table

