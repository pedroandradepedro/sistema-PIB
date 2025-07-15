const mysql = require("mysql2/promise");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "08062024",
  database: "pibsys_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

// Função para testar a conexão

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conectado com sucesso!");
    connection.release();
  } catch (error) {
    console.log("Erro ao conectar ao mysql: ", error.message);
  }
};

testConnection();
module.exports = pool;
