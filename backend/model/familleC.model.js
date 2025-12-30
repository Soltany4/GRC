import mongoose, { Schema } from "mongoose";

const familleSchema = mongoose.Schema({
    name_fc: {
        type: String,
        required: [true, 'Add name']
    },
    coef: {
        type: String,
        required: [true, 'Add coef']
    },
    description: {
        type: String,
        required: [true, 'Add description']
    },
    name_mission: {
        type: String,
        required: [true, '']
    },
    id_constat: {
        type: [Schema.Types.ObjectId],
        ref: 'Constat'
    }
})

export default mongoose.model("Famille", familleSchema)