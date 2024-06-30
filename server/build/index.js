"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors")); // Import the 'cors' module
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)()); // Use 'cors' as middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);
app.set("BASE_URL", process.env.BASE_URL || "http://localhost:3000");
dotenv_1.default.config();
try {
    server.listen(app.get("port"), () => {
        console.log(`Server is running on ${app.get("BASE_URL")}`);
    });
}
catch (error) {
    console.error(error);
}
exports.default = server;
