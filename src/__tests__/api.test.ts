import * as request from "supertest";
import { app } from "../app";

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});

describe("Test the api path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/api");
    expect(response.status).toBe(200);
  });
});
