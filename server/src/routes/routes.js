"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const open_AI_router_1 = __importDefault(require("./open_AI_router"));
const router = (0, express_1.Router)();
router.use("/generate_response");
router.use("/hello");
router.use("/Hello Response", open_AI_router_1.default);
exports.default = router;
