// index.js

// 1. Importar as dependências
const express = require("express");
const mysql = require("mysql2/promise"); // Usamos a versão com Promises
const cors = require("cors");
require("dotenv").config(); // Carrega as variáveis do arquivo .env

// 2. Configurações iniciais
const app = express();
const port = 3000; // A porta que definimos no frontend

// 3. Middlewares
app.use(cors()); // Permite requisições de outras origens
app.use(express.json()); // Habilita o servidor a entender JSON

// 4. Configuração da conexão com o MySQL
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

// Função para testar a conexão (opcional, mas bom para debug)
async function testDbConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("Conexão com o MySQL bem-sucedida!");
    await connection.end();
  } catch (error) {
    console.error("Erro ao conectar com o MySQL:", error);
  }
}
testDbConnection();


// 5. Definir a rota de CRIAÇÃO (Create)
// A rota é POST /comandas, como definimos no fetch do frontend
app.post("/comandas", async (req, res) => {
  // Extrai os dados do corpo da requisição (o que o frontend enviou)
  const { usuario, numero_comanda, produto } = req.body;

  // Validação simples no backend
  if (!usuario || !numero_comanda || !produto) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    // Cria uma nova conexão para cada requisição
    const connection = await mysql.createConnection(dbConfig);

    // Query SQL para inserir os dados
    const sql = "INSERT INTO comandas (usuario, numero_comanda, produto) VALUES (?, ?, ?)";
    const values = [usuario, numero_comanda, produto];

    // Executa a query
    await connection.execute(sql, values);

    // Fecha a conexão
    await connection.end();

    // Envia uma resposta de sucesso
    res.status(201).json({ message: "Comanda criada com sucesso!" });

  } catch (error) {
    console.error("Erro ao inserir no banco de dados:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});


// 6. Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}` );
});
