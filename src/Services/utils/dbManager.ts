import MySqlConnection from 'react-native-my-sql-connection'
import { DBConstants } from '@/Constants/database'

let config = {
  host: DBConstants.host,
  database: 'appexcol',
  user: DBConstants.username,
  password: DBConstants.password,
  port: 3306,
}

export function openConnection() {
  try {
    const connection = MySqlConnection.createConnection(config)
    let res = connection.executeQuery('SELECT * FROM myTable')
    if (res != null) {
      console.log('connection estabilished')
    } else {
      throw new Error('Something went wrong')
    }
    // connection.close();
  } catch (err) {
    // handle error
  }
}