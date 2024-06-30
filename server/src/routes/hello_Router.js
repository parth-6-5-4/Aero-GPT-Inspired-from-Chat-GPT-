"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hello_Router = (0, express_1.Router)();
hello_Router.get("/", (req, res) => { res.json({ 'data': "sever is live" }); });
exports.default = hello_Router;
