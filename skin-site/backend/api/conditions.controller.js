import ConditionsDAO from "../DAO/conditionsDAO.js";
export default class ConditionsController {
    static async apiGetConditions(req, res, next){
        console.log(`start apiGetConditions`)
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
}