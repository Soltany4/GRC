import mongoose, { Schema } from "mongoose";

const maturitySchema = mongoose.Schema({
    score_maturity: {
        type: String,
        required: [true, 'Add name']
    },
    id_constat: {
        type: Schema.Types.ObjectId,
        ref: 'Constat'
    }
})

export default mongoose.model("Maturity", maturitySchema)
