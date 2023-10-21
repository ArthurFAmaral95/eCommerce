import path from 'path'
import knex from 'knex'

const dbPath = path.resolve('server/db/database.sqlite')

const config = {
  client: 'sqlite3',
  connection: {
    filename: dbPath
  },
  useNullAsDefault: true
}

const knx = knex(config)

knx
  .select('*')
  .from('categories')
  .then(data => console.log(data))
  .catch(err => console.log(err))
