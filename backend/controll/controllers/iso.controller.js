import Iso from "../../model/iso.model.js"


    export const getIso = async (req, res) => {
    try{
    const iso = await Iso.find()
    res.status(200).json(iso)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}