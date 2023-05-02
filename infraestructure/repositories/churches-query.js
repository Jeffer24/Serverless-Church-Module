const { db } = require("./connections");
const TableName = "Iglesias";

const findChurches = async () => {
  return db.select().table(TableName);
};

const findOneChurch = async (id) => {
  return db.select().table(TableName).where("idIglesias", id).first();
};
const createChurch = async ({
  nombreIglesia,
  direccionIglesia,
  telefono,
  idZonas,
  estado,
}) => {
  return await db(TableName).insert({
    nombreIglesia,
    direccionIglesia,
    telefono,
    idZonas,
    estado,
  });
};
const updateChurch = async (
  { nombreIglesia, direccionIglesia, telefono, idZonas, estado },
  id
) => {
  return await db(TableName).where("idIglesias", id).update({
    nombreIglesia: nombreIglesia,
    direccionIglesia: direccionIglesia,
    telefono: telefono,
    idZonas: idZonas,
    estado: estado,
  });
};

const deleteChurch = async (id) => {
  return await db(TableName).where("idIglesias", id).del();
};

module.exports = {
  findChurches,
  findOneChurch,
  createChurch,
  updateChurch,
  deleteChurch,
};
