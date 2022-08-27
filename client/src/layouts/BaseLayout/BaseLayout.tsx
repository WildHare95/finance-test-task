import React, {useCallback, useContext, useEffect} from "react";
import {ServerResponseQuotas} from "src/store/types";

import {
    SERVER_CHANGE_INTERVAL_EVENT,
    SERVER_CONNECT_EVENT,
    SERVER_START_EVENT,
    SERVER_TICKER_EVENT
} from "src/constants/socketEvents";

import {useAppDispatch, useAppSelector} from "src/store/hooks";
import {setQuotasData} from "src/store/data/data-slice";
import Table from "src/components/Table/Table";
import SelectQuotas from "src/components/SelectQuotas/SelectQuotas";
import {selectFetchInterval} from "src/store/selectors";
import {SocketContext} from "src/context/socket";

const BaseLayout = () => {
    const socket = useContext(SocketContext)
    const dispatch = useAppDispatch()
    const fetchingIntervalInSeconds = useAppSelector(selectFetchInterval)

    const onSetQuotas = useCallback((data: ServerResponseQuotas[]) => {
            dispatch(setQuotasData(data))
    }, [dispatch])

    useEffect(() => {
        if (socket) {
            socket.on(SERVER_CONNECT_EVENT, () => {
                socket.emit(SERVER_START_EVENT)
            })
            socket.on(SERVER_TICKER_EVENT, onSetQuotas)

            socket.on('connect_error', function(err) {
                if (err) {
                    dispatch(setQuotasData([]))
                }
            });
        }
        return () => {
            socket && socket.off(SERVER_TICKER_EVENT, onSetQuotas);
        }
    }, [socket, onSetQuotas, dispatch])


    useEffect(() => {
        if (socket) {
            socket.emit(SERVER_CHANGE_INTERVAL_EVENT, fetchingIntervalInSeconds * 1000);
        }
        return () => {

        }
    }, [fetchingIntervalInSeconds, socket])


    return <div>
        <SelectQuotas/>
        <Table/>
    </div>
}

export default BaseLayout