if (process.env.NODE_ENV !== "production") {
  // Check for .env file in development
  const dotenv = require("dotenv");
  const result = dotenv.config();
  if (result.error) {
    throw result.error;
  }
}


let config = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  ssl: true,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};


module.exports = config;