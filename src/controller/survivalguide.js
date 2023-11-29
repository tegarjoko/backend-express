const { survivalmodel } = require("../models/models");

const postSurvivalGuide = async (req, res) => {
  const { name, url_markdown } = req.body;
  try {
    const postSurvival = await survivalmodel.create({
      name: name,
      url_markdown: url_markdown,
    });
    return res.status(201).json({ message: "success", data: postSurvival });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Post Survival Guide failed", serverMessage: error });
  }
};

const getSurvivalGuide = async (req, res) => {
  try {
    const getSurvival = await survivalmodel.findAll();
    return res.status(200).json({ message: "success", data: getSurvival });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Get Survival Guide failed", serverMessage: error });
  }
};

const updateSurvivalGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url_markdown } = req.body;
    const updateSurvival = await survivalmodel.update({ name: name, url_markdown: url_markdown }, { where: { id: id } });
    return res.status(200).json({ message: "success", data: updateSurvival });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Update Survival Guide failed", serverMessage: error });
  }
};

const deleteSurvivalGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSurvival = await survivalmodel.destroy({ where: { id: id } });
    return res.status(200).json({ message: "success", data: deleteSurvival });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Delete Survival Guide failed", serverMessage: error });
  }
};

module.exports = { postSurvivalGuide, getSurvivalGuide, updateSurvivalGuide, deleteSurvivalGuide };
