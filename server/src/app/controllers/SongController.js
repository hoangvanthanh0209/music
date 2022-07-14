import { SongModel } from '../models/SongModel.js'

const getSong = async (req, res) => {
    try {
        const songs = await SongModel.find()
        console.log('[songs]', songs)
        res.status(200).json(songs)
    } catch (error) {
        res.status(500).json({ error })
    }
}

const uploadSong = async (req, res) => {
    try {
        const newSong = req.body

        const song = new SongModel(newSong)
        await song.save()

        res.status(200).json(song)
    } catch (error) {
        res.status(500).json({ error })
    }
}

const updateSong = async (req, res) => {
    try {
        const updateSong = req.body

        const song = await SongModel.findByIdAndUpdate({ _id: updateSong._id }, updateSong, { new: true })

        res.status(200).json(song)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export { getSong, uploadSong, updateSong }
