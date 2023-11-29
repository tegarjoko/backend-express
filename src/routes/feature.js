const express = require("express");
const EdiblePlantsController = require("../controller/edibleplants");
const SurvivalGuideController = require("../controller/survivalguide");
const FirstAidController = require("../controller/firstaid");
const router = express.Router();
const authCheck = require("../middleware/verifytoken");

router.post("/survival-guide", authCheck, SurvivalGuideController.postSurvivalGuide);
router.get("/survival-guide", authCheck, SurvivalGuideController.getSurvivalGuide);
router.put("/survival-guide/:id", authCheck, SurvivalGuideController.updateSurvivalGuide);
router.delete("/survival-guide/:id", authCheck, SurvivalGuideController.deleteSurvivalGuide);

router.post("/edible-plant", authCheck, EdiblePlantsController.postEdiblePlant);
router.get("/edible-plant", authCheck, EdiblePlantsController.getEdiblePlant);
router.put("/edible-plant/:id", authCheck, EdiblePlantsController.updateEdiblePlant);
router.delete("/edible-plant/:id", authCheck, EdiblePlantsController.deleteEdiblePlant);

router.post("/first-aid", authCheck, FirstAidController.postFirstAid);
router.get("/first-aid", authCheck, FirstAidController.getFirstAid);
router.put("/first-aid/:id", authCheck, FirstAidController.updateFirstAid);
router.delete("/first-aid/:id", authCheck, FirstAidController.deleteFirstAid);

module.exports = router;
