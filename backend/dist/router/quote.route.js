"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var quote_controller_1 = require("../controllers/quote.controller");
var router = express_1.default.Router();
router.get("/random", quote_controller_1.getQuote);
exports.default = router;
