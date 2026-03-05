const request = require("supertest");
const app = require("../index");

describe("Calculator API", () => {
  test("adds 2 + 3", async () => {
    const res = await request(app).get("/add/2/3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test("subtracts 10 - 4", async () => {
    const res = await request(app).get("/sub/10/4");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(6);
  });

  test("multiplies 6 * 7", async () => {
    const res = await request(app).get("/mul/6/7");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(42);
  });

  test("divides 8 / 2", async () => {
    const res = await request(app).get("/div/8/2");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(4);
  });

  test("division by zero returns 400", async () => {
    const res = await request(app).get("/div/4/0");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Division by zero");
  });

  test("invalid number returns 400", async () => {
    const res = await request(app).get("/add/a/3");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Invalid number");
  });
});