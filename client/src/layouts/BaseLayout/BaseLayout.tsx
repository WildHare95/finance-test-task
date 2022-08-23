import React, {useCallback, useEffect, useState} from "react";
import {io} from "socket.io-client";
import {ServerResponseQuotas, SocketEvents} from "src/store/types";
import {SERVER_CONNECT_EVENT, SERVER_START_EVENT, SERVER_TICKER_EVENT, SERVER_URL} from "src/constants/socketEvents";
import {useAppDispatch} from "src/store/hooks";
import { setQuotasData } from "src/store/data/data-slice";
import Table from "src/components/Table/Table";
import SelectQuotas from "src/components/SelectQuotas/SelectQuotas";

const BaseLayout = () => {
    const [socket, setSocket] = useState<SocketEvents | null>(null)
    const dispatch = useAppDispatch()

    const onSetQuotas = useCallback((data: ServerResponseQuotas[]) => {
        dispatch(setQuotasData(data))
    },[dispatch])

    useEffect(() => {
        const newSocket = io(SERVER_URL)
        setSocket(newSocket)
        return () => {
            newSocket.close()
        }
    }, [])

    useEffect(() => {
        if (socket) {
            socket.on(SERVER_CONNECT_EVENT, () => {
                socket.emit(SERVER_START_EVENT)
            })

            socket.on(SERVER_TICKER_EVENT, onSetQuotas)
        }
        return () => {
            socket && socket.off(SERVER_TICKER_EVENT, onSetQuotas);
        }
    }, [socket, onSetQuotas])


    return <div>
        BaseLayout
        <SelectQuotas />
        <Table />

        <label className="switch">
            <input
                onChange={event => {
                    if (event.target.checked) {
                        socket?.off(SERVER_TICKER_EVENT)
                    } else {
                        socket?.on(SERVER_TICKER_EVENT, ()=>{})
                    }
                }}
                type="checkbox" />
            <span className="slider round"/>
        </label>
    </div>
}

export default BaseLayout