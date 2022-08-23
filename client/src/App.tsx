import React from "react";
import './App.css';

import Header from "./components/Header/Header";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";


function App() {
    return (
        <div>
            <Header/>
            <BaseLayout/>
        </div>
    );
}

export default App;
