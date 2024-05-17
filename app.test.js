// app.test.js
const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("should return 'App is Running'", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("App is Running");
  });
});

describe("GET /ping", () => {
  it("should return 'Pong'", async () => {
    const response = await request(app).get("/ping");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Pong");
  });
});

describe("GET /pong", () => {
  it("should return 'Ping Pong'", async () => {
    const response = await request(app).get("/pong");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Ping Pong");
  });
});
