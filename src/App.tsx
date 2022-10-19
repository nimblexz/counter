import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    const [count, setCount] = useState(0)
    const maxValue=4
    const increment = () => {

        if (maxValue===count) {
            return
        }setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }
    return (
        <Counter
            increment={increment}
            count={count}
            reset={reset}
            maxValue={maxValue}
        />
    );
}

export default App;
