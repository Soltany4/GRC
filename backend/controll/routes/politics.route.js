import express from 'express'
import { auditPolitics } from '../controllers/politcs.controller.js'

const router = express.Router()

router.get('/politics', auditPolitics)

export default router