'use strict'
import express from 'express'
import { editarPerfil, eliminar, login, registro } from './usuario.controller.js'
import {ValidarJWT} from '../middlewates/validadcion-jwt.js'

const api  = express.Router()

api.post('/registro', registro)
api.post('/login',login)
api.put('/EditarPerfil/:id', [ValidarJWT], editarPerfil)
api.delete('/Eliminar/:id',[ValidarJWT], eliminar)

export default api