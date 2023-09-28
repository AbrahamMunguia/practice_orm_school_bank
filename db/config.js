const URI = `postgres://admin:admin123@localhost:5432/school`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
    logging:true,

  },
  production: {
    url: URI,
    dialect: 'postgres',
  }
}