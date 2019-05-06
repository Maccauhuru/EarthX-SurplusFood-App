import React from "react";
import "../css/App.css";
import Nav from "./Nav";
// import AddSurplus from "./AddSurplus"
import Login from "./Login"

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Login />
        </div>
    );
};

export default App;
