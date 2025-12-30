import express from 'express'
import { addMission, deleteMission, listMissions, selectMission, updateMission } from '../controllers/missions.controller.js'

const router = express.Router()

router.get('/missions', listMissions)

router.post('/new', addMission)

router.delete('/:id', deleteMission)

router.get('/:id', selectMission)

router.patch('/:id', updateMission)

export default router