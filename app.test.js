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




describe("Test the parameter path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get(`/events/${3}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});



// describe("Test the post path", () => {
//     it('should create a new event', async () => {
//         const res = await request(app)
//             .post('/add-event')
//             .send({
//                 "id": '34',
//                 "author": 'req.body.author',
//                 "capacity": 30,
//                 "event": 'event name',
//                 "venue": 'location',
//                 "date": 'today',
//                 "description": 'description',
//                 "attendants": []
//             });
//         expect(res.statusCode).toEqual(200)
//         expect(res.body).toHaveProperty('post')
//     })
// });
