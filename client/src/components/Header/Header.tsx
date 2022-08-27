import React, {ChangeEvent, FormEvent, useState} from "react";

import {setIntervalTime} from "src/store/data/data-slice";
import {useAppDispatch, useAppSelector} from "src/store/hooks";
import {selectFetchInterval, selectQuoteData} from "src/store/selectors";
import logo from "src/assets/logo.png"

import "./Header.styles.scss"

const Header = () => {
    const dispatch = useAppDispatch()
    const fetchInterval = useAppSelector(selectFetchInterval)
    const quotasData = useAppSelector(selectQuoteData)
    const [customTime, setCustomTime] = useState<number>(fetchInterval)

    const onSubmitTime = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(setIntervalTime(customTime))
    }

    const onChangeTime = (event: ChangeEvent<HTMLInputElement>) => {
        const intervalTime = +event.target.value
        setCustomTime(intervalTime)
    }

    return <div className="header-container">
        <img
            className="header-logo"
            src={logo} alt="Logo"/>
        <form
            className="header-form"
            onSubmit={onSubmitTime}
        >
            <label>
                Change fetching time:
                <input
                    className="header-input"
                    value={customTime}
                    min={3}
                    max={10}
                    onChange={onChangeTime}
                    type="number"
                    disabled={!quotasData.length}
                />
            </label>
            <input
                className="header-button"
                type="submit"
                data-testid="12"
                value="Set time"
                disabled={!quotasData.length}
            />
        </form>
    </div>
}

export default Header