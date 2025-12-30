import express from 'express'
import { getIso } from '../controllers/iso.controller.js'

const router = express.Router()

router.get('/iso', getIso)

export default router