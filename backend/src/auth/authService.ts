import { result } from "lodash";
import { UserModel } from "../db/query/user.model";

export class AuthService{
  public static async authenticateUserCredentials(user: String, password: String):Promise<any> {
    return new Promise(function (resolve, reject) { 
      UserModel.queryUser(user).then(result => {
        if (result.username == user && result.password == password) {
            resolve (true);
          }
          else {
            resolve (false)
          }
      })
    })
  }
}