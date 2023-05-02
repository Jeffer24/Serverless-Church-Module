const usuarioAdapter = require("../../application/model_adapters/usuario-adapter");

const getUsuarios = async () => {
  return usuarioAdapter.findUsuarios();
};
const createUsuario = async (usuarioData) => {
  return usuarioAdapter.createUsuario(usuarioData);
};
const updateUsuario = async (usuarioData, id) => {
  return usuarioAdapter.updateUsuario(usuarioData, id);
};
const deleteUsuario = async (id) => {
  return usuarioAdapter.deleteUsuario(id);
};
const getDetailUsuario = async (id) => {
  return usuarioAdapter.findOneUsuario(id);
};

module.exports = {
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getDetailUsuario,
};
