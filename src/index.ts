import type { Request, Response } from "express";
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/fib", (req: Request, res: Response) => {
  const { n } = req.query;
  const fib_arr: bigint[] = [];

  // ---------- リクエストの値がに半角英数字の 「０ ~ 9」 以外の文字が含まれている場合のエラー処理 ----------
  if (
    String(n).match(/[0-9]/g) === null ||
    String(n).match(/[ -/:-@[-`{-~]/g) ||
    String(n).match(/[a-z]/g) ||
    String(n).match(/[A-Z]/g)
  ) {
    return res
      .status(400)
      .send(
        "The request value is invalid. The request value must be alphanumeric."
      );
  }

  // ---------- リクエストの値が　半角英数字の 「０」 のみで構成されている場合のエラー処理 ----------
  if (String(n).match(/[0]*/) && String(n).match(/[1-9]/g) === null) {
    return res
      .status(400)
      .send('"A value of 0 or non-alphanumeric characters is invalid.');
  }

  // ----------- n番目までのフィボナッチ数列を求める反復処理 -----------
  for (let i = 0; i < Number(n); i++) {
    if (i === 0) {
      fib_arr.push(BigInt(0));
    }

    if (i < 2) {
      fib_arr.push(BigInt(1));
    } else {
      const a = BigInt(fib_arr[fib_arr.length - 1]);
      const b = BigInt(fib_arr[fib_arr.length - 2]);
      const sum = a + b;

      fib_arr.push(sum);
    }
  }
  //  n番目のフィボナッチ数
  const result = BigInt(fib_arr[fib_arr.length - 1]);

  // ---------- 結果が 「null」 もしくは　 「undefined」ではない場合、n番目のフィボナッチ数を返す -----------
  if (result === null || undefined) {
    return res.status(404).send({ result: String(result) });
  }
  return res.status(200).send({ result: String(result) });
});

app.listen(port, () => {
  console.log("サーバーが立ち上がっています");
});
