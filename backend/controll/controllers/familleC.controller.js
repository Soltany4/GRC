import Famille from "../../model/familleC.model.js"

//list des famille
export const listFamilleC = async (req, res) => {
    try{
    const familles = await Famille.find()
    res.status(200).json(familles)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


// add famille
export const addFamilleC = async (req, res) => {
try{
    if (!req.body.text) {
        res.status(400) 
    }
    const { name_fc, coef, description, name_mission, id_constat} = req.body
    
    console.log(req.body)
        
    const famille = await Famille.create({
        name_fc,
        coef,
        description,
        name_mission,
        id_constat
    })

    const familles = await Famille.find()
    
    res.status(200).json(familles)


} catch (error) {
    res.status(500).json({message: 'Server Error'})
}

}

//select famille
export const selectFamilleC = async(req, res) => {
    try {
        const famille = await Famille.findById(req.params.id)
    
        if (!famille) {
            res.status(400)
        } else {
            res.status(200).json(famille)
        }
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
    
    }

// delete famille by id
export const deleteFamilleC = async (req, res) => {

    const famille = Famille.findById(req.params.id)

    const deleted = await Famille.deleteOne({ _id: req.params.id })


    res.status(200).json(req.params.id)


}

// update famille by id
export const updateFamilleC = async (req, res) => {
    
    const famille = await Famille.findById(req.params.id)

    if(!famille) {
        res.status(400)
    }

    const updatedfamille = await Famille.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedfamille)


}