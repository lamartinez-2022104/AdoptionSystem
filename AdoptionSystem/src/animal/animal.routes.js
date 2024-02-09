'user strict'

import express from 'express'
import { prueba, guardar, actualizar, borrar, buscar } from './animal.controller.js'

const api = express.Router()

api.get('/prueba', prueba)
api.post('/guardar', guardar)
api.put('/actualizar', actualizar)
api.delete('/borrar', borrar )
api.get('/buscar', buscar)

export default api