const app = require("../src/app");
chai.use(chaiHttp);

describe("Recipe", () => {
  it("GET /api/recipe 404s with no answers", done => {
    chai
      .request(app)
      .get("/api/recipe")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it("GET /api/recipe 201s with answers", done => {
    // This fails when no recipes in DB.
    // Not sure what to do about that.
    chai
      .request(app)
      .get("/api/recipe")
      .query({ cuisine: "british" })
      .query({ complex: "no" })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it("GET /api/recipe/:id 200s", done => {
    chai
      .request(app)
      .get("/api/recipe/1")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it("POST /api/recipe 404s without content", done => {
    chai
      .request(app)
      .post("/api/recipe")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it("POST /api/recipe 201s with content", done => {
    chai
      .request(app)
      .post("/api/recipe")
      .send({
        name: "Test Rec 1",
        prep_time: 10,
        cook_time: 15,
        cuisine: "british",
        complex: "yes",
        ingredients: [
          { name: "iubui", amount: "buib" },
          { name: "iouboiub", amount: "ioboiu" },
          { name: "boiub", amount: "oiubiuob" },
          { name: "ioubiuo", amount: "biuob" },
          { name: "iuobio", amount: "ubioub" }
        ],
        instructions: [
          { instructions: "bioubi" },
          { instructions: "oubioub" },
          { instructions: "ioubioub" },
          { instructions: "oiuioubiou" }
        ]
      })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
