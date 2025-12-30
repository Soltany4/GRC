import Mission from "../../model/mission.model.js";

// list missions
export const listMissions = async (req, res) => {
    try{
    const missions = await Mission.find()
    res.status(200).json(missions)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


// add mission
export const addMission = async (req, res) => {
    try{
    if (!req.body.text) {
        res.status(400) 
    }
    const { name, beginDate, duration, objectifs, projects } = req.body
    const missionExists = await Mission.findOne({name})

    if (missionExists) {
        res.status(500).json({
            message: "mission already exists"
        })
    }
    const mission = await Mission.create({
        name,
        beginDate,
        duration,
        objectifs,
        projects,
    })

    const missions = await Mission.find()
    
    res.status(200).json(missions)

} catch (error) {
    res.status(500).json({message: 'Server Error'})
}

}


//select mission
export const selectMission = async(req, res) => {
    try {
        const mission = await Mission.findById(req.params.id)
    
        if (!mission) {
            res.status(400)
        } else {
            res.status(200).json(mission)
        }
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
    
    }


// delete mission by id
export const deleteMission = async (req, res) => {

    const mission = Mission.findById(req.params.id)

    const deleted = await Mission.deleteOne({ _id: req.params.id })


    res.status(200).json(req.params.id)


}

// update mission by id
export const updateMission = async (req, res) => {
    
    const mission = await Mission.findById(req.params.id)

    if(!mission) {
        res.status(400)
    }

    const updatedMission = await Mission.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedMission)


}