import {Socket} from "socket.io-client";

export type ServerResponseQuotas = {
    ticker: string
    exchange: string
    price: string
    change: number
    change_percent: number
    dividend: number
    yield: number
    last_trade_time: string
}

type ServerToClientEvents = {
    ticker: (data: ServerResponseQuotas[]) => void
}

type ClientToServerEvents = {
    start: () => void
}

export type SocketEvents = Socket<ServerToClientEvents, ClientToServerEvents>