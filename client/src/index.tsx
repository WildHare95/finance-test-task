import React from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from "react-redux";

import 'src/index.scss';

import App from "./App";
import reportWebVitals from './reportWebVitals';
import {setupStore} from "src/store/store";

const root = createRoot(document.getElementById('root') as HTMLBRElement)
const store = setupStore()

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
