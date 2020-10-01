import mysql from 'mysql'

import { DbMysqlConfig } from './config/dbConfig'
export class MysqlDbService { 
  public static connect() {
    const con = mysql.createConnection(DbMysqlConfig.getMysqlConfig())
    con.connect((err) => {
      if (err) {
        console.log(err)
        console.log("Error to connect DB");
        return
      }
      console.log("DB Connected!")
    })
    }
}