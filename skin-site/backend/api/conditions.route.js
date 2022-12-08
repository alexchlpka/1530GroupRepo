import express from "express"
import ConditionsController from "./conditions.controller.js"
import DevCtrl from "./devops.controller.js"

const router = express.Router()
console.log(`attempting to get conditions`)
router.route("/").get(ConditionsController.apiGetConditions)

router.route("/devOps")
    .post(DevCtrl.apiPostCondition)
    .put(DevCtrl.apiPutCondition)
    .delete(DevCtrl.apiDeleteCondition)
export default router