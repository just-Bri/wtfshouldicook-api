const app = require("../src/app");
chai.use(chaiHttp);

describe("Ingredients", () => {
  it("GET /api/ingredient/:id 404s with no id", done => {
    chai
      .request(app)
      .get("/api/ingredient")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it("GET /api/ingredient/:id responds with 200", done => {
    chai
      .request(app)
      .get("/api/ingredient/1")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
