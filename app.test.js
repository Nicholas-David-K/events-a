const request = require("supertest");
const app = require("../backend/routes/handler.js");

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/events")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});




describe("Test events get parameter path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get(`/events/${3}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});