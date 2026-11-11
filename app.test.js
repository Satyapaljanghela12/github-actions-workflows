const request = require("supertest");
const app = require("./app");

describe("Node.js Application", () => {
  test("GET / returns welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      "Welcome to Node.js CI/CD Project"
    );
  });

  test("GET /health returns OK status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });

  test("GET /add/:a/:b returns the sum", async () => {
    const response = await request(app).get("/add/10/20");

    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(30);
  });

  test("GET /add/:a/:b rejects invalid numbers", async () => {
    const response = await request(app).get("/add/abc/20");

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Invalid numbers");
  });
});
