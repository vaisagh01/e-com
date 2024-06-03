import express from 'express'
import { signin, signout, signup } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signin', signin);

router.post('/signup', signup);

router.post('/signout', signout);

export default router;