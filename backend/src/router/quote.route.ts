import express from "express";
import { getQuote } from "../controllers/quote.controller";

const router = express.Router();

router.get("/random", getQuote);

export default router;