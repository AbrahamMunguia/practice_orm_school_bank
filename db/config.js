module.exports = {
  development: {
    "username": "admin123",
    "password": "admin123",
    "database": "school",
    "host":"localhost",
    "port":"3306",
    "dialect": "mysql",
    "logging": (text)=>{
      console.log(text,'platanito gaming')
    }
  },
}