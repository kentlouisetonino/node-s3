import mysql from 'mysql2';

export default class SQLService {
  static connection = mysql.createConnection({
    host: String(process.env.MYSQL_HOST),
    port: Number(process.env.MYSQL_PORT),
    database: String(process.env.MYSQL_DATABASE),
    user: String(process.env.MYSQL_USER),
    password: String(process.env.MYSQL_PASSWORD),
  });
}
