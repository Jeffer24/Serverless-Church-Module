"use strict";
const responseHttp = require("../helpers/response");
const {
  getUsuarios: getUsuariosController,
  createUsuario: createUsuarioController,
  updateUsuario: updateUsuarioController,
  deleteUsuario: deleteUsuarioController,
  getDetailUsuario: getDetailUsuarioController,
} = require("../../application/controllers/usuarios-controller.js");

module.exports.getUsuarios = async (event) => {
  const response = await getUsuariosController();
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.createUsuario = async (event) => {
  const response = await createUsuarioController(JSON.parse(event.body));
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.updateUsuario = async (event) => {
  const response = await updateUsuarioController(
    JSON.parse(event.body),
    event.pathParameters.id
  );
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.deleteUsuario = async (event) => {
  const response = await deleteUsuarioController(event.pathParameters.id);
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.getDetailUsuario = async (event) => {
  const response = await getDetailUsuarioController(event.pathParameters.id);
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};
