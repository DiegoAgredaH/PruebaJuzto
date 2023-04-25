import {useNavigate} from 'react-router-dom'

const TareasCard = ({ tarea }) => {

const navigate = useNavigate()

    return (
        <div
            className='bg-juzto-yellow p-3 hover:bg-juzto-blue py-2 px-4 rounded hover:cursor-pointer hover:text-juzto-yellow text-juzto-text-blue'
            onClick={() => {
                navigate(`/tarea/${tarea.id}`)
            }}
        >
            <h1 className='font-bold uppercase'>{tarea.titulo}</h1>
            <p >{tarea.descripcion}</p>
        </div>
    )
}

export default TareasCard