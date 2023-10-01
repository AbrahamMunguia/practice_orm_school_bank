const URI = `mssql://admin:admin123@localhost:5432/school`;

module.exports = {
  development: {
    url: URI,
    dialect: 'mssql',
    logging:true,

  },
  production: {
    url: URI,
    dialect: 'mssql',
  }
}