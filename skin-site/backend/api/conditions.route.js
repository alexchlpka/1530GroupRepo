import express from "express"
import ConditionsController from "./conditions.controller.js"
import DevCtrl from "./devops.controller.js"

const router = express.Router()
router.route("/").get(ConditionsController.apiGetConditions)
router.route("/id/*").get(ConditionsController.apiGetCondition)
router.route("/devOps")
    .post(DevCtrl.apiPostCondition)
    .put(DevCtrl.apiPutCondition)
    .delete(DevCtrl.apiDeleteCondition)
export default router