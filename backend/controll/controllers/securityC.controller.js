import Security from "../../model/securityC.model.js"

//list des security
export const listSecurityC = async (req, res) => {
    try{
    const security = await Security.find()
    res.status(200).json(security)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


// add sec
export const addSecurityC = async (req, res) => {
try{
    if (!req.body.text) {
        res.status(400) 
    }
    const { name_cs, coefS, descriptionS, name_mission, id_constat} = req.body
    
    console.log(req.body)
        
    const sec = await Security.create({
        name_cs,
        coefS,
        descriptionS,
        name_mission,
        id_constat
    })

    const security = await Security.find()
    
    res.status(200).json(security)


} catch (error) {
    res.status(500).json({message: 'Server Error'})
}

}

//select sec
export const selectSecurityC = async(req, res) => {
    try {
        const sec = await Security.findById(req.params.id)
    
        if (!sec) {
            res.status(400)
        } else {
            res.status(200).json(sec)
        }
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
    
    }

// delete sec by id
export const deleteSecurityC = async (req, res) => {

    const sec = Security.findById(req.params.id)

    const deleted = await Security.deleteOne({ _id: req.params.id })


    res.status(200).json(req.params.id)


}

// update sec by id
export const updateSecurityC = async (req, res) => {
    try {
        const sec = await Security.findById(req.params.id);

        if (!sec) {
            return res.status(404).json({ error: 'Security not found' });
        }

        // Assuming req.body.id_constat is an array of ObjectIds
        sec.id_constat = req.body.id_constat;

        const updatedSecurity = await sec.save();

        res.status(200).json(updatedSecurity);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};