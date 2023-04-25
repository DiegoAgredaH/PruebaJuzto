import React, { useEffect, useState } from 'react'
import { getTareas } from '../Api/tareas_api'
import TareasCard from './TareasCard'

const ListaTareas = () => {
    const [tareas, setTareas] = useState([])

    useEffect(() => {
        async function loadTareas() {
            const res = await getTareas()
            setTareas(res.data)
            console.log(res.data)
        }
        loadTareas()
    }, [])

    return (
        <div className='grid grid-cols-3 gap-3'>
            {tareas.map(tarea => (
                <TareasCard key={tarea.id} tarea={tarea}/>
            ))}
        </div>
    )
}

export default ListaTareas