const { firstaidmodel } = require("../models/models");

const postFirstAid = async (req, res) => {
  const { name, url_markdown } = req.body;
  try {
    const postFirstAid = await firstaidmodel.create({
      name: name,
      url_markdown: url_markdown,
    });
    return res.status(201).json({ success: true, message: "success", data: postFirstAid });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Post First Aid failed", serverMessage: error });
  }
};

const getFirstAid = async (req, res) => {
  try {
    const getFirstAid = await firstaidmodel.findAll();
    return res.status(200).json({ success: true, message: "success", data: getFirstAid });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Get First Aid failed", serverMessage: error });
  }
};

const updateFirstAid = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url_markdown } = req.body;
    const updateFirstAid = await firstaidmodel.update({ name: name, url_markdown: url_markdown }, { where: { id: id } });
    return res.status(200).json({ success: true, message: "success", data: updateFirstAid });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Update First Aid failed", serverMessage: error });
  }
};

const deleteFirstAid = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFirstAid = await firstaidmodel.destroy({ where: { id: id } });
    if (!deleteFirstAid) {
      return res.status(404).json({ success: false, message: "First Aid not found" });
    }
    return res.status(200).json({ success: true, message: "success", data: deleteFirstAid });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Delete First Aid failed", serverMessage: error });
  }
};

module.exports = { getFirstAid, postFirstAid, updateFirstAid, deleteFirstAid };
