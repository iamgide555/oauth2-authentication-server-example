import * as fs from 'fs'
import * as jwt from 'jsonwebtoken'
import moment from 'moment'
import { UserModel } from "../../db/query/user.model";

export class AuthService{
  public static async authenticateUserCredentials(user: String, password: String):Promise<any> {
    return new Promise(function (resolve, reject) { 
      UserModel.queryUser(user).then(result => {
        if (result.username == user && result.password == password) {
            resolve (true);
          }
        else {
          console.log("false")
            resolve (false)
          }
      })
    })
  }

  public static generateAccessToken(username: String) {
    const privateKey = fs.readFileSync('/Users/kittipat/Desktop/Projects/pandasoftProject/pandasoftProject/backend/src/auth/config/private_access_token.key', { encoding: "utf8" })
    const payload = {
      "username": username,
      "exp":moment().add('1',"d").valueOf()
    }

    // JWT option
    const signOptions = {
      expiresIn:  "6h",
      algorithm:  "RS256"
    };
    try {
      var token = jwt.sign(payload, privateKey,{ algorithm: 'RS256' });
      return token
    } catch {
      return null
    }
  }
  public static verifyAccessToken(token: any) {
    const publicKey = fs.readFileSync("/Users/kittipat/Desktop/Projects/pandasoftProject/pandasoftProject/backend/src/auth/config/public_access_token.key", { encoding: "utf8" })
    try{
      const decodeToken = jwt.verify(token, publicKey)
      return decodeToken
    } catch(err) {
      return 
    }
  }
}