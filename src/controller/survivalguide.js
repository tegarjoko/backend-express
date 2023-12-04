const { survivalmodel } = require("../models/models");

const postSurvivalGuide = async (req, res) => {
  const { name, url_markdown } = req.body;
  try {
    const postSurvival = await survivalmodel.create({
      name: name,
      url_markdown: url_markdown,
    });
    return res.status(201).json({ success: true, message: "success", data: postSurvival });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Post Survival Guide failed", serverMessage: error });
  }
};

const getSurvivalGuide = async (req, res) => {
  try {
    const getSurvival = await survivalmodel.findAll();
    return res.status(200).json({ success: true, message: "success", data: getSurvival });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Get Survival Guide failed", serverMessage: error });
  }
};

const updateSurvivalGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url_markdown } = req.body;
    const updateSurvival = await survivalmodel.update({ name: name, url_markdown: url_markdown }, { where: { id: id } });
    return res.status(200).json({ success: true, message: "success", data: updateSurvival });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Update Survival Guide failed", serverMessage: error });
  }
};

const deleteSurvivalGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSurvival = await survivalmodel.destroy({ where: { id: id } });
    if (!deleteSurvival) {
      return res.status(404).json({ success: false, message: "Survival Guide not found" });
    }
    return res.status(200).json({ success: true, message: "success", data: deleteSurvival });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Delete Survival Guide failed", serverMessage: error });
  }
};

module.exports = { postSurvivalGuide, getSurvivalGuide, updateSurvivalGuide, deleteSurvivalGuide };
