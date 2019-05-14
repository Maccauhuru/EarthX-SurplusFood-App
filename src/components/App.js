import React from "react";
import "../css/App.css";
import Nav from "./Nav";
import Account from "./Account"
//import AddSurplus from "./AddSurplus"
// import Login from "./Login"

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Account />
        </div>
    );
};

export default App;
