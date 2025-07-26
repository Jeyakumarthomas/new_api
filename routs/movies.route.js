import express from 'express'
import { MovieCreate,MovieUpdate,MovieIndex,MovieDelete } from '../controllers/movies.controller.js';

const router = express.Router();

router.get('/',MovieIndex)
router.post('/',MovieCreate)
router.put('/:id',MovieUpdate)
router.delete('/:id',MovieDelete)

export default router