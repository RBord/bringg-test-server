const express = require("express")
const { people: ctrl } = require("../controllers")
const { controllerWrapper } = require("../middlewares/controllerWrapper")
const router = express.Router()

router.get("/", controllerWrapper(ctrl.getAllPeople))

router.get("/:id", controllerWrapper(ctrl.getPeopleById))

module.exports = router
