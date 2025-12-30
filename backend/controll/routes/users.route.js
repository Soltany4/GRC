import express from 'express'
import {  addUser, deleteUser, getUser, listUsers, loginUser, registerUser, selectUser, updateUser } from "../controllers/users.controller.js"

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/profil', getUser)

router.get('/users', listUsers)

router.post('/new', addUser)

router.get('/:id', selectUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router