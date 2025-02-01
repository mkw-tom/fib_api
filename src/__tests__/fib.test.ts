const request = require("supertest");
import app from "../index";

describe("GET /fib", () => {
	it("success", async () => {
		const res = await request(app).get("/fib?n=99");
		expect(res.status).toBe(200);
		expect(res.body).toEqual({ result: "218922995834555169026" });
	});

	it("invalid value ", async () => {
		const res = await request(app).get("/fib?n=abc");
		expect(res.status).toBe(400);
		expect(res.text).toBe(
			"The request value is invalid. The request value must be alphanumeric.",
		);
	});
	
	it("invalid value for only '0", async () => {
		const res = await request(app).get("/fib?n=000");
		expect(res.status).toBe(400);
		expect(res.text).toBe(
			"A value of 0 or non-alphanumeric characters is invalid.",
		);
	});
});
