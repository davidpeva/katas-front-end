import { useState } from 'react';
import './Counter.css';
import logo from '../logo.svg';

export const CounterScreen = () => {
    //este es el hook
    const [counter, setCounter] = useState(0);

    const updateCounter = (direction) => {
        if (direction === 'up') {
            setCounter((prev) => prev + 1 )
        }else {
            setCounter((prev) => prev - 1)
        }
    }

    return (
    <div className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <p>Valor actual : {counter}</p>
        <hr />
        <div>
            <button onClick={() => updateCounter('up')} className='btn btn-success'>+</button>
            <button onClick={() => updateCounter('down')} className='btn btn-success'>-</button>
        </div>
    </div>
    )
}
