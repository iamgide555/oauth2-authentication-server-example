import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";

import { createAuthApiMiddleware } from "./auth/app/auth.app";
import { MysqlDbService } from "./db/MysqlDbService";

//Initial environment config
dotenv.config();

//Initial App
const app = express();
const port = process.env.SERVER_PORT;


// Configure Express to use EJS
app.set('view engine', 'ejs');

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(createAuthApiMiddleware())

// start the Express server
app.listen(port, () => {
    MysqlDbService.connect()
    console.log( `server started at http://localhost:${ port }` );
} );