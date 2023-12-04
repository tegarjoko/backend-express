const express = require("express");
const EdiblePlantsController = require("../controller/edibleplants");
const SurvivalGuideController = require("../controller/survivalguide");
const FirstAidController = require("../controller/firstaid");
const router = express.Router();
const { auth, isAdmin } = require("../middleware/verifytoken");

router.post("/survival-guide", auth, isAdmin, SurvivalGuideController.postSurvivalGuide);
router.get("/survival-guide", auth, SurvivalGuideController.getSurvivalGuide);
router.put("/survival-guide/:id", auth, isAdmin, SurvivalGuideController.updateSurvivalGuide);
router.delete("/survival-guide/:id", auth, isAdmin, SurvivalGuideController.deleteSurvivalGuide);

router.post("/edible-plant", auth, isAdmin, EdiblePlantsController.postEdiblePlant);
router.get("/edible-plant", auth, EdiblePlantsController.getEdiblePlant);
router.put("/edible-plant/:id", auth, isAdmin, EdiblePlantsController.updateEdiblePlant);
router.delete("/edible-plant/:id", auth, isAdmin, EdiblePlantsController.deleteEdiblePlant);

router.post("/first-aid", auth, isAdmin, FirstAidController.postFirstAid);
router.get("/first-aid", auth, FirstAidController.getFirstAid);
router.put("/first-aid/:id", auth, isAdmin, FirstAidController.updateFirstAid);
router.delete("/first-aid/:id", auth, isAdmin, FirstAidController.deleteFirstAid);

module.exports = router;
