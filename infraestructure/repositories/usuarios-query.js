const { db } = require("./connections");
const TableName = "Usuarios";

const findUsuarios = async () => {
  return db.select().table(TableName);
};

const findOneUsuarioEmail = async (email) => {
  return db.select().table(TableName).where("email", email).first();
};

const findOneUsuario = async (id) => {
  return db.select().table(TableName).where("idUsuarios", id).first();
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
  return await db(TableName).insert({
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
  id
) => {
  return await db(TableName).where("idUsuarios", id).update({
    nombre: nombre,
    identificacion: identificacion,
    telefono: telefono,
    email: email,
    password: password,
    idPerfiles: idPerfiles,
    estado: estado,
    idZona: idZona,
    idPais: idPais,
  });
};

const deleteUsuario = async (id) => {
  return await db(TableName).where("idUsuarios", id).del();
};

module.exports = {
  findUsuarios,
  findOneUsuario,
  findOneUsuarioEmail,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
