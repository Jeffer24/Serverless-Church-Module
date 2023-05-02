const churchQuery = require("../../infraestructure/repositories/churches-query");
const churchDto = require("../helpers/church-dto");

const findChurches = async () => {
  const data = await churchQuery.findChurches();
  return churchDto.getChurchesFromDBArray(data);
};

const findOneChurch = async (id) => {
  const church = await churchQuery.findOneChurch(id);
  if (!church) return null;
  return churchDto.getChurchFromDBDto(church);
};

const createChurch = async ({
  nombreIglesia,
  direccionIglesia,
  telefono,
  idZonas,
  estado,
}) => {
  return await churchQuery.createChurch({
    nombreIglesia,
    direccionIglesia,
    telefono,
    idZonas,
    estado,
  });
};

const updateChurch = async (
  { nombreIglesia, direccionIglesia, telefono, idZonas, estado },
  idChurches
) => {
  return await churchQuery.updateChurch(
    {
      nombreIglesia,
      direccionIglesia,
      telefono,
      idZonas,
      estado,
    },
    idChurches
  );
};

const deleteChurch = async (idChurches) => {
  return await churchQuery.deleteChurch(idChurches);
};

module.exports = {
  findChurches,
  findOneChurch,
  createChurch,
  updateChurch,
  deleteChurch,
};
