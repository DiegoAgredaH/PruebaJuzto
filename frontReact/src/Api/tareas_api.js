import axios from 'axios'

const tareasAPI = axios.create({
  baseURL: 'http://127.0.0.1:8000/tareas/api/tarea',
})

export const getTareas = () => tareasAPI.get("/");
export const createTareas = (tarea) => tareasAPI.post("/", tarea);
export const deleteTareas = (id) => tareasAPI.delete(`/${id}/`);
export const updateTareas = (id, tarea) => tareasAPI.put(`/${id}/`, tarea);
export const getTarea = (id) => tareasAPI.get(`/${id}/`);
