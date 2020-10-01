export class DbMysqlConfig { 
  public static getMysqlConfig() {
    return {
      host: '127.0.0.1',
      user: 'user',
      password: 'password',
      database: 'db'
    }
  }
}