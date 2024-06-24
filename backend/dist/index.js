"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var quote_route_1 = __importDefault(require("./router/quote.route"));
var app = (0, express_1.default)();
var port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use('/', quote_route_1.default);
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
