import express from 'express'
import {ValidarJWT} from '../middlewates/validadcion-jwt.js'
import { actualizarEmpresa, buscarEmpresa, buscarfiltro, listarEmpresas, nuevaEmpresa, tiempo } from './empresa.controller.js'

const api = express.Router()

api.post('/agregarEmpresa/:id',[ValidarJWT]  ,nuevaEmpresa)
api.get('/listarEmpresa', listarEmpresas)
api.get('/buscarEmpresaFiltro', buscarfiltro)
api.get('/buscarEmpresa/:id',[ValidarJWT] ,buscarEmpresa)
api.get('/tiempoEmpresas', tiempo)
api.put('/editarEmpresa/:id',[ValidarJWT] ,actualizarEmpresa)
  
export default api