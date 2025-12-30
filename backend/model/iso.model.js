import mongoose from "mongoose";

const controlSchema = mongoose.Schema(
    {
        num_cs: {
            type: String
        },
        nom_cs: {
            type: String
        },
        control: {
            type: String
        }
    })

const c_controlSchema = mongoose.Schema({
    num_cc: {
        type: String,
    },
    nom_cc: {
        type: String
    },
    objective: {
        type: String
    },
    controls: {
        type: [controlSchema]
    }
})

const isoSchema = mongoose.Schema({
    num_fc: {
        type: String,
    },
    nom_fc: {
        type: String,
    },
    category_control: {
        type: [c_controlSchema]
    }
})

export default mongoose.model("Iso", isoSchema)