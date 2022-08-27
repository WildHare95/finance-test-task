import {io} from "socket.io-client";
import {SERVER_URL} from "src/constants/socketEvents";
import React from "react";
import {SocketEvents} from "src/store/types";

export const socket = io(SERVER_URL)
export const SocketContext: React.Context<SocketEvents> = React.createContext(socket)
