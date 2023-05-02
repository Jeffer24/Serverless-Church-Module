const getChurchFromDBDto = ({
  idIglesias,
  nombreIglesia,
  direccionIglesia,
  telefono,
  idZona,
  estado,
}) => ({
  idIglesias: idIglesias,
  nombreIglesia: nombreIglesia,
  direccionIglesia: direccionIglesia,
  telefono: telefono,
  idZona: idZona,
  estado: estadoChange(estado),
});

const estadoChange = (estado) => {
  const uint32array = new Uint32Array(estado);
  return uint32array[0];
};

const getChurchesFromDBArray = (usuariosDB) =>
  usuariosDB.map(getChurchFromDBDto);

const getDBFromChurchDto = ({
  idIglesias,
  nombreIglesia,
  direccionIglesia,
  telefono,
  idZona,
  estado,
}) => ({
  idIglesias: idIglesias,
  nombreIglesia: nombreIglesia,
  direccionIglesia: direccionIglesia,
  telefono: telefono,
  idZona: idZona,
  estado: estado,
});

module.exports = {
  getChurchFromDBDto,
  getChurchesFromDBArray,
  getDBFromChurchDto,
};
