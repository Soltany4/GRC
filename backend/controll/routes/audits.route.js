import express from 'express'
import { addAudit, deleteAudit, listAudits, selectAudit, updateAudit } from '../controllers/audits.controller.js'

const router = express.Router()

router.get('/audits', listAudits)

router.post('/new', addAudit)

router.delete('/:id', deleteAudit)

router.get('/:id', selectAudit)

router.patch('/:id', updateAudit)


export default router