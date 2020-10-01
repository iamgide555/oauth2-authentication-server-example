import express from 'express'

import * as authController from '../controllers/auth.controller';

export function createAuthApiMiddleware(): express.Express {
  const app = express();
  const router = express.Router();

  app.use('/api/auth/', router)
  
  router.get('/login', authController.login);
  router.post('/login', authController.userLogin)
  return app;
}
