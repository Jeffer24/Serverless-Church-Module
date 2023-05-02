const getUsuarioFromDBDto = ({
  idUsuarios,
  nombre,
  identificacion,
  telefono,
  email,
  password,
  idPerfiles,
  estado,
  idZona,
  idPais,
}) => ({
  idUsuarios: idUsuarios,
  nombre: nombre,
  identificacion: identificacion,
  telefono: telefono,
  email: email,
  password: password,
  idPerfiles: idPerfiles,
  estado: estadoChange(estado),
  idZona: idZona,
  idPais: idPais,
});

const estadoChange = (estado) => {
  const uint32array = new Uint32Array(estado);
  return uint32array[0];
};

const getUsuariosFromDBArray = (usuariosDB) =>
  usuariosDB.map(getUsuarioFromDBDto);

const getDBFromUsuarioDto = ({
  idUsuarios,
  nombre,
  identificacion,
  telefono,
  email,
  password,
  idPerfiles,
  estado,
  idZona,
  idPais,
}) => ({
  idUsuarios: idUsuarios,
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

module.exports = {
  getUsuarioFromDBDto,
  getUsuariosFromDBArray,
  getDBFromUsuarioDto,
};
