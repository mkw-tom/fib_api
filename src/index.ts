import type { Request, Response } from "express";
const express = require("express");
const fibRouter = require("./routes/fib");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(cors());
app.use(express.json());

// ---------- フィボナッチ関数を返すAPI --------
app.use("/fib", fibRouter);

app.listen(port, host, () => {
	console.log("サーバーが立ち上がっています");
});

export default app;
