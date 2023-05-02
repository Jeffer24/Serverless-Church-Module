const {
  responseSuccess,
  responseFail,
  structureFail,
} = require("../helpers/responses");
const { StatusCodes } = require("http-status-codes");
const usuarioUseCase = require("../../domain/usecase/usuarios-usecase");

const getUsuarios = async () => {
  let response = null;
  try {
    const result = await usuarioUseCase.getUsuarios();
    response = responseSuccess({ data: result });
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const createUsuario = async (usuarioData) => {
  let response = null;
  try {
    await usuarioUseCase.createUsuario(usuarioData);
    response = responseSuccess(
      {
        message: "Usuario creado.",
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

const updateUsuario = async (usuarioData, idUsuario) => {
  let response = null;
  try {
    //console.log('usuario Data updated ', usuarioData, idUsuario);
    //Validamos si existe el usuario
    response = await validarExistencia(idUsuario);
    if (response.data) {
      const result = await usuarioUseCase.updateUsuario(usuarioData, idUsuario);
      response = responseSuccess(
        {
          message: "Usuario actualizado.",
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

const deleteUsuario = async (idUsuario) => {
  let response = null;
  try {
    //console.log('usuario Data elimiar ', idUsuario);
    // Validamos si existe el usuario
    response = await validarExistencia(idUsuario);
    if (response.data) {
      await usuarioUseCase.deleteUsuario(idUsuario);
      response = responseSuccess(
        {
          message: "Usuario eliminado.",
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

const getDetailUsuario = async (idUsuario) => {
  let response = null;
  try {
    //console.log('usuario Data consultar ', idUsuario);
    response = await validarExistencia(idUsuario);
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const validarExistencia = async (idUsuario) => {
  let response = null;
  const result = await usuarioUseCase.getDetailUsuario(idUsuario);

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
        message: "Usuario no encontrado.",
      },
      StatusCodes.NOT_FOUND
    );
  }

  return response;
};

module.exports = {
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getDetailUsuario,
};
