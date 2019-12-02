const app = require("../src/app");
chai.use(chaiHttp);

describe("Ingredients", () => {
  it("GET /api/instruction/:id 404s with no id", done => {
    chai
      .request(app)
      .get("/api/instruction")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it("GET /api/instruction/:id responds with 200", done => {
    chai
      .request(app)
      .get("/api/instruction/1")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
