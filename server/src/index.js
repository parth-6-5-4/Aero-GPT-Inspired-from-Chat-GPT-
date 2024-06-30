//"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors")); // Import the 'cors' module
// Initialize dotenv to use environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)()); // Use 'cors' as middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Set the port and base URL from environment variables or default values
const PORT = process.env.PORT || 300;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
try {
    server.listen(PORT, () => {
        console.log(`Server is liestining ${BASE_URL}`);
    });
}
catch (error) {
    console.error(error);
}
exports.default = server;
