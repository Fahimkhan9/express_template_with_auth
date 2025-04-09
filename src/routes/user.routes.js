import {Router}from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/users.controller.js'


const router = Router()

router.route('/register').post(registerUser)

// secure routes

router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)
export default router