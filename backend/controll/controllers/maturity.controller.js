import Maturity from "../../model/maturity.model.js"

//list des maturity
export const listMaturity = async (req, res) => {
    try{
    const maturities = await Maturity.find()
    res.status(200).json(maturities)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


// add maturity
export const addMaturity = async (req, res) => {
try{
    if (!req.body.text) {
        res.status(400) 
    }
    const { score_maturity, id_constat,} = req.body
    const maturityExists = await Maturity.findOne({id_famille})

    
    
    console.log(req.body)
    if (!maturityExists) {
        if (parseFloat(score_maturity) > 0){ 
           
                
            
            const maturity = await Maturity.create({
                score_maturity,
                id_constat,
            })}
    } else {
        return
    }

    const maturities = await Maturity.find()
    
    res.status(200).json(maturities)


} catch (error) {
    res.status(500).json({message: 'Server Error'})
}

}

//select maturity
export const selectMaturity = async(req, res) => {
    try {
        const maturity = await Maturity.findById(req.params.id)
    
        if (!maturity) {
            res.status(400)
        } else {
            res.status(200).json(maturity)
        }
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
    
    }

// delete maturity by id
export const deleteMaturity = async (req, res) => {

    const maturity = Maturity.findById(req.params.id)

    const deleted = await Maturity.deleteOne({ _id: req.params.id })


    res.status(200).json(req.params.id)


}

// update maturity by id
export const updateMaturity = async (req, res) => {
    
    const maturity = await Maturity.findById(req.params.id)

    if(!maturity) {
        res.status(400)
    }

    const updatedmaturity = await Maturity.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedmaturity)


}