let conditions

export default class ConditionsDAO {
    static async injectDB(conn) {
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

    static async getConditions({
        filters = null,
        page = 0,
        conditionsPerPage = 20,
    } = {}) {
        let query
        if(filters){
            if ("name" in filters) {
                query = { $text: { $search: filters["name"]}}
            }
        }

        let cursor

        try{
            cursor = await conditions.find(query)
        } catch(e){
            console.error(
                `Unable to issue find command ${e}`
            )
            return {conditionsList: [], totalNumConditions: 0}
        }

        const displayCursor = cursor.limit(conditionsPerPage).skip(conditionsPerPage * page)

        try{
            const conditionsList = await displayCursor.toArray()
            const totalNumConditions =  await conditions.countDocuments(query)
            return {conditionsList, totalNumConditions}
        } catch(e){
            console.error(`Unable to conver cursor or problem counting documents, ${e}`)
            return {conditionsList: [], totalNumConditions: 0}
        }
    }
    static async getCondition({
        filters = null,} = {}) {
        let query
        if(filters){
            if ("_id" in filters) {
                query = { $_id: { $eq: filters["_id"]}}
            }
        }
        try{
        } catch(e){
            console.error(
                `Unable to issue find command ${e}`
            )
            return {condition: []}
        }
        try{
            console.log(`here's where I would be finding the item by ${filters["_id"]}`)
            let condition = {}
            return {condition}
        } catch(e){
            console.error(`Unable to convert cursor or problem counting documents, ${e}`)
            return {condition: []}
        }
    }
}