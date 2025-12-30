import mongoose from "mongoose";

const missionSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Add name']
    },
    beginDate: {
        type: String,
        required: [true, 'Add begin date']
    },
    duration: {
        type: String,
        required: [true, 'Add duration']
    },
    objectifs: {
        type: [{type: String}],
    },
    projects: {
        type: [{type: String}],
    },
    audits: {
        type: [{type: String}],
    }
})

export default mongoose.model("Mission", missionSchema)