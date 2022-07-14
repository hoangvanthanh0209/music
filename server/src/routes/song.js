import express from 'express'
import { getSong, updateSong, uploadSong } from '../app/controllers/SongController.js'

const router = express.Router()

router.get('/', getSong)
router.post('/upload', uploadSong)
router.post('/update', updateSong)

export default router
