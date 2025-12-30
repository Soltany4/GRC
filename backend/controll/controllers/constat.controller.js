import Constat from "../../model/constat.model.js"

//list des constats
export const listConstats = async (req, res) => {
    try{
    const constats = await Constat.find()
    res.status(200).json(constats)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


// add constat
export const addConstat = async (req, res) => {
try{
    if (!req.body.text) {
        res.status(400) 
    }
    const { nom_vuln, description, actif_impact, criticite, score, priority, id_audit } = req.body
    
    console.log(req.body)
        
    const constat = await Constat.create({
        nom_vuln,
        description,
        actif_impact,
        criticite, 
        score,
        priority,
        id_audit
    })

    const constats = await Constat.find()
    
    res.status(200).json(constats)


} catch (error) {
    res.status(500).json({message: 'Server Error'})
}

}

//select constat
export const selectConstat = async(req, res) => {
    try {
        const constat = await Constat.findById(req.params.id)
    
        if (!constat) {
            res.status(400)
        } else {
            res.status(200).json(constat)
        }
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
    
    }

// delete constat by id
export const deleteConstat = async (req, res) => {

    const constat = Constat.findById(req.params.id)

    const deleted = await Constat.deleteOne({ _id: req.params.id })


    res.status(200).json(req.params.id)


}

// update constat by id
export const updateConstat = async (req, res) => {
    
    const constat = await Constat.findById(req.params.id)

    if(!constat) {
        res.status(400)
    }

    const updatedConstat = await Constat.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedConstat)


}