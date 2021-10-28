const express = require("express")
const { planets: ctrl } = require("../controllers")
const { controllerWrapper } = require("../middlewares/controllerWrapper")
const router = express.Router()

router.get("/", controllerWrapper(ctrl.getAllPlanets))

router.get("/:id", controllerWrapper(ctrl.getPlanetsById))

module.exports = router
