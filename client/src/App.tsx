import React from "react";
import './App.css';

import Header from "./components/Header/Header";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";

import {io} from "socket.io-client";
import {SERVER_URL} from "src/constants/socketEvents";
import {SocketEvents} from "src/store/types";

function App() {
    return (
        <div>
            <Header/>
            <BaseLayout/>
        </div>
    );
}

export default App;
