const churchAdapter = require("../../application/model_adapters/church-adapter");

const getChurches = async () => {
  return churchAdapter.findChurches();
};
const createChurch = async (churchData) => {
  return churchAdapter.createChurch(churchData);
};
const updateChurch = async (churchData, id) => {
  return churchAdapter.updateChurch(churchData, id);
};
const deleteChurch = async (id) => {
  return churchAdapter.deleteChurch(id);
};
const getDetailChurch = async (id) => {
  return churchAdapter.findOneChurch(id);
};

module.exports = {
  getChurches,
  createChurch,
  updateChurch,
  deleteChurch,
  getDetailChurch,
};
