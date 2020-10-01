import { NextFunction, Request, Response } from 'express';
import express from 'express'

import { RequestHelper } from '../utils/request.helper';
import { AuthService } from '../auth/authService';
import { result } from 'lodash';

const app = express()

export const login = (req: Request, res: Response) => {
  res.render('login')
}

export const userLogin = async (req: Request, res: Response) => {
  const username = RequestHelper.getUsername(req);
  const password = RequestHelper.getPassword(req);
  // Check request
  if (!username || !password) {
    res.status(400).send({
      "error": "invalid_request"
    })
  }
  console.log("Username: " + username)
  console.log("Password: " + password)
  // Check Username Password
  AuthService.authenticateUserCredentials(username, password).then(result => {
    console.log(result)
    if (!result) {
      res.status(401).send({
        'error': 'access_denied'
      })
    }
  })
}