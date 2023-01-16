import { useState, useEffect } from "react";


export function Counter() {
    let [counter, setCounter] = useState(0);

    useEffect(function() {
        console.log('Efecto del counter')
    }, [counter])

    return (
        <div>
            <h1>Counter: {counter}</h1>

            <button onClick={() => setCounter(counter + 1)}>
                Sumar
            </button>

            <button onClick={() => setCounter(counter - 1)}>
                Restar
            </button>
        </div>
    )
}
