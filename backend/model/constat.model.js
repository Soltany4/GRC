import mongoose, { Schema } from "mongoose";

const constatSchema = mongoose.Schema({
    nom_vuln: {
        type: String,
        required: [true, 'Add name vulnerability']
    },
    description: {
        type: String,
        required: [true, 'Add description']
    },
    actif_impact: {
        type: String,
        required: [true, 'Add impact']
    },
    criticite: {
        type: String,
        required: [true, 'Add criticite']
    },
    score: {
        type: String,
        required: [true, 'Add score']
    },
    id_audit: {
        type: Schema.Types.ObjectId,
        ref: 'Audit'
    },
    priority: {
        type: String,
        required: [true, 'Add priority']
    }
})

export default mongoose.model("Constat", constatSchema)