import mongodb, { ObjectId } from "mongodb"
const ObjectID = mongodb.ObjectId

let conditions
export default class DevDAO{
    static async injectDB(conn){
        if(conditions){
            return
        } 
        try {
            conditions = await conn.db(process.env.SKIN_NS).collection("SkinConditions")
        } catch (e) {
            console.error(
                `unable to establish connection with SkinConditions: ${e}`,
            )
        }
    }
    static async addCondition(conditionName, conditionSymptoms, conditionDescription, conditionTreatment){
        try{
            const condDoc = {name: conditionName,
                            symptoms: conditionSymptoms,
                            description: conditionDescription,
                            treatment: conditionTreatment,}
            console.log(condDoc)
            return await conditions.insertOne(condDoc)
        } catch(e){
            console.error(`unable to post condition: ${e}`)
            return {error: e}
        }
    }
    static async updateCondition(conditionID, conditionName, conditionSymptoms, conditionDescription, conditionTreatment){
        try{
            const updateResponse = await conditions.updateOne({_id: ObjectId(conditionID)}, 
                                                              {$set: {name: conditionName,
                                                                symptoms: conditionSymptoms,
                                                                description: conditionDescription,
                                                                treatment: conditionTreatment}})
            return updateResponse
        } catch (e){
            console.error(`unable to update condition: ${e}`)
            return {error: e}
        }
    }
    static async deleteCondition(conditionID){
        try{
            const deleteResponse = await conditions.deleteOne({_id: ObjectId(conditionID)})
            return deleteResponse
        } catch (e){
        console.error(`unable to delete condition: ${e}`)
        return {error: e}
        }
    }
}