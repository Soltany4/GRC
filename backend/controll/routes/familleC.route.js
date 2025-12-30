import express from 'express'
import { addFamilleC, deleteFamilleC, listFamilleC, selectFamilleC, updateFamilleC } from '../controllers/familleC.controller.js'


const router = express.Router()

router.get('/familles', listFamilleC)

router.post('/new', addFamilleC)

router.delete('/:id', deleteFamilleC)

router.get('/:id', selectFamilleC)

router.patch('/:id', updateFamilleC)

export default router