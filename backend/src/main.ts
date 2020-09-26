import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

import path from "path";
import dotenv from "dotenv";

//Initial environment config
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT; // default port to listen


// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.render("login")
});


// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );