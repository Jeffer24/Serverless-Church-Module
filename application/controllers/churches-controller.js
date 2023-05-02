const {
  responseSuccess,
  responseFail,
  structureFail,
} = require("../helpers/responses");
const { StatusCodes } = require("http-status-codes");
const churchUseCase = require("../../domain/usecase/churches-usecase");

const getChurches = async () => {
  let response = null;
  try {
    const result = await churchUseCase.getChurches();
    response = responseSuccess({ data: result });
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const createChurch = async (churchData) => {
  let response = null;
  try {
    await churchUseCase.createChurch(churchData);
    response = responseSuccess(
      {
        message: "Church creado.",
      },
      StatusCodes.CREATED
    );
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const updateChurch = async (churchData, idChurch) => {
  let response = null;
  try {
    //console.log('church Data updated ', churchData, idChurch);
    //Validamos si existe el church
    response = await validarExistencia(idChurch);
    if (response.data) {
      const result = await churchUseCase.updateChurch(churchData, idChurch);
      response = responseSuccess(
        {
          message: "Church actualizado.",
          data: result,
        },
        StatusCodes.OK
      );
    }
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const deleteChurch = async (idChurch) => {
  let response = null;
  try {
    //console.log('church Data elimiar ', idChurch);
    // Validamos si existe el church
    response = await validarExistencia(idChurch);
    if (response.data) {
      await churchUseCase.deleteChurch(idChurch);
      response = responseSuccess(
        {
          message: "Church eliminado.",
        },
        StatusCodes.OK
      );
    }
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const getDetailChurch = async (idChurch) => {
  let response = null;
  try {
    //console.log('church Data consultar ', idChurch);
    response = await validarExistencia(idChurch);
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const validarExistencia = async (idChurch) => {
  let response = null;
  const result = await churchUseCase.getDetailChurch(idChurch);

  if (result) {
    response = responseSuccess(
      {
        data: result,
      },
      StatusCodes.OK
    );
  } else {
    response = responseSuccess(
      {
        data: null,
        message: "Church no encontrado.",
      },
      StatusCodes.NOT_FOUND
    );
  }

  return response;
};

module.exports = {
  getChurches,
  createChurch,
  updateChurch,
  deleteChurch,
  getDetailChurch,
};
