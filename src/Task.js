import './task.css';

export function TaskCard({ready}) {

    /* const cardStyles = { background: "#202020", color: '#fff', padding:'20px'};
    const titleStyles = {fontWeight: 'bold' }; */
    /* const ready = false; */

    return (
        <div className='card'>
            <h1>Mi primer tarea</h1>
            <p
                style={ready ? {background: 'green'} : {background: 'red'}}
            >
                {ready ? 'Tarea Realizada' : 'Tarea pendiente'}
            </p>
        </div>
    )
}