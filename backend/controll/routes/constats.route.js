import express from 'express'
import { addConstat, deleteConstat, listConstats, selectConstat, updateConstat } from '../controllers/constat.controller.js'

const router = express.Router()

router.get('/constats', listConstats)

router.post('/new', addConstat)

router.delete('/:id', deleteConstat)

router.get('/:id', selectConstat)

router.patch('/:id', updateConstat)

export default router