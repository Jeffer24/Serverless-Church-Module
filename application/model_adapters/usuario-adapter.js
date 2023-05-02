const usuarioQuery = require("../../infraestructure/repositories/usuarios-query");
const usuarioDto = require("../helpers/usuario-dto");

const findUsuarios = async () => {
  const data = await usuarioQuery.findUsuarios();
  return usuarioDto.getUsuariosFromDBArray(data);
};

const findOneUsuario = async (id) => {
  const perf = await usuarioQuery.findOneUsuario(id);
  if (!perf) return null;
  return usuarioDto.getUsuarioFromDBDto(perf);
};

const createUsuario = async ({
  nombre,
  identificacion,
  telefono,
  email,
  password,
  idPerfiles,
  estado,
  idZona,
  idPais,
}) => {
  return await usuarioQuery.createUsuario({
    nombre,
    identificacion,
    telefono,
    email,
    password,
    idPerfiles,
    estado,
    idZona,
    idPais,
  });
};

const updateUsuario = async (
  {
    nombre,
    identificacion,
    telefono,
    email,
    password,
    idPerfiles,
    estado,
    idZona,
    idPais,
  },
  idUsuarios
) => {
  return await usuarioQuery.updateUsuario(
    {
      nombre,
      identificacion,
      telefono,
      email,
      password,
      idPerfiles,
      estado,
      idZona,
      idPais,
    },
    idUsuarios
  );
};

const deleteUsuario = async (idUsuarios) => {
  return await usuarioQuery.deleteUsuario(idUsuarios);
};

module.exports = {
  findUsuarios,
  findOneUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
