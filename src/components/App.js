import React from "react";
import "../css/App.css";
import Nav from "./Nav";
import AddSurplus from "./AddSurplus"

const App = () => {
    return (
        <div className="App">
            <Nav />
            <h1>Sell Your Surplus Food</h1>
            <AddSurplus />
        </div>
    );
};

export default App;
