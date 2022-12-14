import ConditionsDAO from "../DAO/conditionsDAO.js";
export default class ConditionsController {
    static async apiGetConditions(req, res, next){
        const conditionsPerPage = req.query.conditionsPerPage ? parseInt(req.query.conditionsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }

        const {conditionsList, totalNumConditions} = await ConditionsDAO.getConditions({
            filters,
            page,
            conditionsPerPage,
        })

        let response = {
            conditions: conditionsList,
            page: page,
            filters: filters,
            entries_per_page: conditionsPerPage,
            total_results: totalNumConditions,
        }
        res.json(response)
    }
    static async apiGetCondition(req, res, next){
        let filters = {}
        if(req.query._id){
            console.log(`PARAM ID FOUND: ${req.query._id}`)
            filters._id = req.query._id
        }

        const {condition} = await ConditionsDAO.getCondition({
            filters,
        })

        let response = {
            condition: condition,
            filters: filters,
        }
        res.json(response)
    }
}