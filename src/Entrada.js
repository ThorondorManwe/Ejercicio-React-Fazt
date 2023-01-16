import { useState, useEffect } from "react";

export function Entrada() {
    const [mensaje, setMensaje] = useState('');

    


    return (
        <div>
            <input onChange={e => {
                setMensaje(e.target.value);
            }}/>
            <button onClick={() => {
                alert('El mensaje es: ' + mensaje)
            }}>
                Save
            </button>

            <hr/>

        </div>
    );
}