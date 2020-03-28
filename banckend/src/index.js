const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * Get: Buscar/Listar uma  informação do back-end
  * Post: Criar uma informação no back-end
  * Put: Alterar uma informação no back-end
  * Delete: Deletar uma informação no back-end
  */
/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Resquest Body:
 */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Build:
 */

app.listen(5000)