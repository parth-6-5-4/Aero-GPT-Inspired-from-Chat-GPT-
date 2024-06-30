"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OpenAiRouter = (0, express_1.Router)();
OpenAiRouter.post("/", (req, res) => {
    res.json({ "data": "From OpenAI" });
});
exports.default = OpenAiRouter;
