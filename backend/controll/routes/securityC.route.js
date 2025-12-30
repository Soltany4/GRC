import express from 'express'
import { addSecurityC, deleteSecurityC, listSecurityC, selectSecurityC, updateSecurityC } from '../controllers/securityC.controller.js'


const router = express.Router()

router.get('/sec', listSecurityC)

router.post('/new', addSecurityC)

router.delete('/:id', deleteSecurityC)

router.get('/:id', selectSecurityC)

router.patch('/:id', updateSecurityC)

export default router