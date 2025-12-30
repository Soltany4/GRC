import mongoose from "mongoose";

const auditSchema = mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Add name']
    },
    date: {
        type: String,
        required: [true, 'Add begin date']
    },
    id_mission : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mission'
    },
    categorie: {
        type: String,
        required: [true, 'Add catogry']
    },
    ref: {
        type: String,
        required: [true, 'Add reference']
    }
})

export default mongoose.model("Audit", auditSchema)