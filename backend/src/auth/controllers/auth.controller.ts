import { NextFunction, Request, Response } from 'express';
import express from 'express'

import { RequestHelper } from '../../utils/request.helper';
import { AuthService } from '../service/authService';
import { access } from 'fs';

const app = express()

export const tokenVerify = (req: Request, res: Response) => {
  try {
    const decodeToken = AuthService.verifyAccessToken(req)
  } catch {
    res.status(400).send({
      "error": "invalid_request"
    })
  }
}

export const login = (req: Request, res: Response) => {
  console.log("Call login")
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
    if (!result) {
      res.redirect(401,'http://localhost:4200/')
      // res.status(401).send({
      //   'error': 'access_denied'
      // })
    }
    const access_token = AuthService.generateAccessToken(username);
    if (access_token) {
      res.cookie('access_token', access_token, { maxAge: 900000 })
      res.redirect('http://localhost:4200/')
    }
    else {
      res.status(500).send({
        "error":"fail_generate_token"
      })
    }
  })
}