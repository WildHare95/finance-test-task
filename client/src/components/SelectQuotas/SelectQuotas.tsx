import React, { useEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import "./SelectQuotas.styles.scss"

import {useAppDispatch, useAppSelector} from "src/store/hooks";
import {selectSampleOfQuotas} from "src/store/selectors";
import {setSampleOfQuotas} from "src/store/data/data-slice";


const SelectQuotas = () => {

    const [ticketsNames, setTicketsNames] = useState<string[]>([])

    const sample = useAppSelector(selectSampleOfQuotas)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setTicketsNames(sample)
    }, [sample])

    const removeQuote = (quotas: string) => {
        const arrayCopy = [...ticketsNames]
        const index = arrayCopy.indexOf(quotas)
        arrayCopy.splice(index, 1)
        dispatch(setSampleOfQuotas(arrayCopy))
    }

    return <div className="select-container">
        <TransitionGroup component="div">
            {
                ticketsNames.map(item => {
                    return <CSSTransition
                        key={item}
                        timeout={700}
                        classNames="select-ticket"
                    >
                        <button
                            className="select-ticket"
                            onClick={() => removeQuote(item)}
                        >
                            {item}
                            <span className="select-button-plus"/>
                        </button>
                    </CSSTransition>
                })
            }
        </TransitionGroup>
    </div>
}

export default SelectQuotas