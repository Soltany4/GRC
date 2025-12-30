import express from 'express'
import { addMaturity, deleteMaturity, listMaturity, selectMaturity, updateMaturity } from '../controllers/maturity.controller.js'


const router = express.Router()

router.get('/maturity', listMaturity)

router.post('/new', addMaturity)

router.delete('/:id', deleteMaturity)

router.get('/:id', selectMaturity)

router.patch('/:id', updateMaturity)

export default router