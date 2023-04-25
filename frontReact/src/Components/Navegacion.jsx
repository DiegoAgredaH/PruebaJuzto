import {Link} from 'react-router-dom'

export const Navegacion = () => {
  return (
    <div className='flex justify-between py-3'>
        <Link to='lista'><h1 className='font-bold text-3xl mb-4 text-juzto-blue hover:text-juzto-text-blue'>Listado de Tareas</h1></Link>
        <button className='bg-juzto-text-blue px-3 py-2 rounded-lg hover:bg-juzto-yellow hover:text-juzto-text-blue'><Link to='crear-tareas' >Crear Tareas</Link></button>
    </div>
  )
}
