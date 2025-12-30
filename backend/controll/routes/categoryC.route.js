import express from 'express'
import { addCategoryC, deleteCategoryC, listCategoryC, selectCategoryC, updateCategoryC } from '../controllers/categoryC.controller.js'


const router = express.Router()

router.get('/categories', listCategoryC)

router.post('/new', addCategoryC)

router.delete('/:id', deleteCategoryC)

router.get('/:id', selectCategoryC)

router.patch('/:id', updateCategoryC)

export default router