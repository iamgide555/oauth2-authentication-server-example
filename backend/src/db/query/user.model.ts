import mysql from 'mysql'
import { DbMysqlConfig } from "../config/dbConfig";

export class UserModel { 
  public static queryUser(user: String):Promise<any>{
    return new Promise(function (resolve, reject) {
      const con = mysql.createConnection(DbMysqlConfig.getMysqlConfig())
      con.query('select * from USER_PROFILE where username = ' + mysql.escape(user), (err, rows) => {
        if (err) {throw err}
        if (typeof (rows[0]) != 'undefined') {
        resolve({
          'username': rows[0].username,
          'password': rows[0].password
        })
        }
        else {
          resolve({
            'username': '',
            'password':''
        })
        }
      })
    })
  }
}
