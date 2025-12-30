import mongoose, { Schema } from "mongoose";

const securitySchema = mongoose.Schema({
    name_cs: {
        type: String,
        required: [true, 'Add name']
    },
    coefS: {
        type: String,
        required: [true, 'Add coef']
    },
    descriptionS: {
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

export default mongoose.model("Security", securitySchema)