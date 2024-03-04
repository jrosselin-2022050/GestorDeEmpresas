import express from 'express'
import { editarCategoria, eliminarCategoria, listarCategorias, nuevaCategoria } from './categoria.controller.js'

const api = express.Router()

api.post('/nuevaCategoria', nuevaCategoria)
api.put('/editarCategoria/:id', editarCategoria)
api.delete('/eliminarCategoria/:id', eliminarCategoria)
api.get('/verCategorias',listarCategorias)

export default api