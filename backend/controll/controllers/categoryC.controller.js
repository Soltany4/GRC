import Category from "../../model/categoryC.model.js"

//list des category
export const listCategoryC = async (req, res) => {
    try{
    const categorys = await Category.find()
    res.status(200).json(categorys)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


// add category
export const addCategoryC = async (req, res) => {
try{
    if (!req.body.text) {
        res.status(400) 
    }
    const { name_cc, coefC, descriptionC, name_mission, id_constat} = req.body
    
    console.log(req.body)
        
    const category = await Category.create({
        name_cc,
        coefC,
        descriptionC,
        name_mission,
        id_constat
    })

    const categorys = await Category.find()
    
    res.status(200).json(categorys)


} catch (error) {
    res.status(500).json({message: 'Server Error'})
}

}

//select category
export const selectCategoryC = async(req, res) => {
    try {
        const category = await Category.findById(req.params.id)
    
        if (!category) {
            res.status(400)
        } else {
            res.status(200).json(category)
        }
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
    
    }

// delete category by id
export const deleteCategoryC = async (req, res) => {

    const category = Category.findById(req.params.id)

    const deleted = await Category.deleteOne({ _id: req.params.id })


    res.status(200).json(req.params.id)


}

// update category by id
export const updateCategoryC = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Assuming req.body.id_constat is an array of ObjectIds
        category.id_constat = req.body.id_constat;

        const updatedCategory = await category.save();

        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};