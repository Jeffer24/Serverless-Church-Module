"use strict";
const responseHttp = require("../helpers/response");
const {
  getChurches: getChurchesController,
  createChurch: createChurchController,
  updateChurch: updateChurchController,
  deleteChurch: deleteChurchController,
  getDetailChurch: getDetailChurchController,
} = require("../../application/controllers/churches-controller.js");

module.exports.getChurches = async (event) => {
  const response = await getChurchesController();
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.createChurch = async (event) => {
  const response = await createChurchController(JSON.parse(event.body));
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.updateChurch = async (event) => {
  const response = await updateChurchController(
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

module.exports.deleteChurch = async (event) => {
  const response = await deleteChurchController(event.pathParameters.id);
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.getDetailChurch = async (event) => {
  const response = await getDetailChurchController(event.pathParameters.id);
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};
