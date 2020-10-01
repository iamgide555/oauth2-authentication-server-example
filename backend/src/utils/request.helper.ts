import { Request } from 'express';
import * as _ from 'lodash';

export class RequestHelper { 
  public static getUsername(req: Request): string {
    //(opb,keyobj,default)
    return _.get(req, "body.username", null);
  }
  public static getPassword(req: Request): String {
    return _.get(req, "body.password", null);
  }
}