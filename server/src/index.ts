/*import { Express } from "express";
import http from "http";
import dotenv from "dotenv";
import express from "express";
import { RequestHandler } from "express";
import { Router } from "express";
import cors from "cors"; // Import the 'cors' module
import bodyParser from "body-parser";
import router from "./routes/routes";
 
const app: Express = express();
const server = http.createServer(app);
app.use(cors()); // Use 'cors' as middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);
app.set("BASE_URL", "http://localhost:3000");
 dotenv.config();

app.use("/api/v1" , router)

 try {
   server.listen(app.get("port"), () => {
     console.log(`Server is running🏃`);
   });
 }   catch (error) {
   console.error(error);
 }*/

   import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import the 'cors' module

// Initialize dotenv to use environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors()); // Use 'cors' as middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the port and base URL from environment variables or default values
const PORT = process.env.PORT || 300;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

try {
    server.listen(PORT, () => {
        console.log(`Server is liestning ${BASE_URL}`);
    });
} catch (error) {
    console.error(error);
}

export default server;


