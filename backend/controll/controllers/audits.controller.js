import Audit from "../../model/audit.model.js"

// list audits
export const listAudits = async (req, res) => {
    try{
    const audits = await Audit.find()
    res.status(200).json(audits)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

// add audit
export const addAudit = async (req, res) => {
try{
    if (!req.body.text) {
        res.status(400) 
    }
    const { type, date, id_mission, categorie, ref } = req.body
    
        
    const audit = await Audit.create({
        type,
        date,
        id_mission,
        categorie, 
        ref
    })

    const audits = await Audit.find()
    
    res.status(200).json(audits)


} catch (error) {
    res.status(500).json({message: 'Server Error'})
}

}

//select audit
export const selectAudit = async(req, res) => {
    try {
        const audit = await Audit.findById(req.params.id)
    
        if (!audit) {
            res.status(400)
        } else {
            res.status(200).json(audit)
        }
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
    
    }


// delete audit by id
export const deleteAudit = async (req, res) => {

    const audit = Audit.findById(req.params.id)

    const deleted = await Audit.deleteOne({ _id: req.params.id })


    res.status(200).json(req.params.id)


}

// update audit by id
export const updateAudit = async (req, res) => {
    
    const audit = await Audit.findById(req.params.id)

    if(!audit) {
        res.status(400)
    }

    const updatedAudit = await Audit.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedAudit)


}