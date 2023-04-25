import { useForm } from 'react-hook-form'
import { createTareas, deleteTareas, updateTareas, getTarea } from '../Api/tareas_api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const TareasFormPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTareas(params.id, data)
            toast.success('Tarea actualizada !!', {
                position: 'bottom-right',
                style: {
                    background: '#002888',
                    color: 'white'
                }
            })
        } else {
            await createTareas(data);
            toast.success('Tarea creada !!', {
                position: 'bottom-right',
                style: {
                    background: '#002888',
                    color: 'white'
                }
            })
        }
        navigate('/lista');
    })

    useEffect(() => {
        async function cargarTarea() {
            if (params.id) {
                const { data: { titulo, descripcion } } = await getTarea(params.id)
                setValue('titulo', titulo)
                setValue('descripcion', descripcion)
            }
        }
        cargarTarea()
    }, [])


    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Titulo'
                    {...register("titulo", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {errors.titulo && <span>Titulo es requerido</span>}
                <textarea
                    rows="3"
                    placeholder='Descripción'
                    {...register("descripcion", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                ></textarea>
                {errors.descripcion && <span>Descripcion es requerida</span>}
                <button className='bg-juzto-yellow px-3 py-2 rounded-lg hover:bg-juzto-text-blue w-full mt-3 text-juzto-text-blue hover:text-white'>Guardar</button>
            </form>

            {params.id && <button
                className='bg-juzto-blue px-3 py-2 rounded-lg hover:bg-red-500 w-full mt-3 text-white'
                onClick={async () => {
                    const eliminar = window.confirm('Estas seguro de eliminar?')
                    if (eliminar) {
                        await deleteTareas(params.id)
                        toast.success('Tarea eliminada !!', {
                            position: 'bottom-right',
                            style: {
                                background: '#002888',
                                color: 'white'
                            }
                        });
                        navigate('/lista');
                    }
                }}>Eliminar</button>}

        </div>
    )
}

export default TareasFormPage