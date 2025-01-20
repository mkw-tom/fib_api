import type { Request, Response } from "express";
const express = require("express");
const fibRouter = require("./routes/fib");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const host = process.env.HOST || '0.0.0.0';

app.use(cors());
app.use(express.json());

// ---------- フィボナッチ関数を返すAPI --------
app.use("/fib", fibRouter);

app.listen(port, host, () => {
	console.log(`サーバーが立ち上がっています${port}, host:${host}`);
});

export default app;
