import mongoose, { Schema } from "mongoose";

const categorySchema = mongoose.Schema({
    name_cc: {
        type: String,
        required: [true, 'Add name']
    },
    coefC: {
        type: String,
        required: [true, 'Add coef']
    },
    descriptionC: {
        type: String,
        required: [true, 'Add description']
    },
    name_mission: {
        type: String,
        required: [true, '']
    },
    id_constat: {
        type: [{type: Schema.Types.ObjectId}],
        ref: 'Constat'
    }
})

export default mongoose.model("Category", categorySchema)