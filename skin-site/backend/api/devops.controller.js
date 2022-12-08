import DevDAO from "../DAO/devDAO.js"

export default class DevCtrl {
    static async apiPostCondition(req, res, next){
        try{
            const conditionName = req.body.name
            const conditionSymptoms = req.body.symptoms
            const conditionDescription = req.body.description 
            const conditionTreatment = req.body.treatment

            const CondPostResponse = await DevDAO.addCondition(
                conditionName,
                conditionSymptoms,
                conditionDescription,
                conditionTreatment,
            )

            res.json({ status: "success"})
        } catch (e){
            res.status(500).json({error: e.message})
        }
    }
    static async apiPutCondition(req, res, next){
        try{
            const conditionID = req.body._id
            const conditionName = req.body.name
            const conditionSymptoms = req.body.symptoms
            const conditionDescription = req.body.description 
            const conditionTreatment = req.body.treatment

            const CondPutResponse = await DevDAO.updateCondition(
                conditionID,
                conditionName,
                conditionSymptoms,
                conditionDescription,
                conditionTreatment,
            )

            var { error } = CondPutResponse
            if (error) {
                res.status(400).json({error})
            }
            if (CondPutResponse.modifiedCount === 0){
                throw new Error(
                    `Unable to update condition`
                )
            }
            res.json({status: "success"})
        } catch (e){
            res.status(500).json({error: e.message})
        }
    }
    static async apiDeleteCondition(req, res, next){
        try{
            const conditionID = req.query._id
            console.log(conditionID)
            const DeleteResponse = await DevDAO.deleteCondition(
                conditionID
            )
            res.json({status: "success"})
        } catch(e){
            res.status(500).json({error: e.message})
        }
    }
}