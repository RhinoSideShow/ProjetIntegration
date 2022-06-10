import dbConnect from '../../../lib/dbConnect'
import Membre from '../../../models/Projet'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const membre = await Membre.findById(id)
        if (!membre) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: membre })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const membre = await Membre.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!membre) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: membre })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedMembre = await Membre.deleteOne({ _id: id })
        if (!deletedMembre) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
