import React, { useState } from "react";
import "../styles/App.css";


const App = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <img src="./assets/images/react.svg" className="logo react" alt="" />
            </div>
            <h1>React by Sebastian Boari</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App