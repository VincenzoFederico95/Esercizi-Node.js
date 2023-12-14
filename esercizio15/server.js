const express = require("express");
const planetsController = require("./controller/planets");

const port = 3000;
const app = express();
app.use(express.json());

app.get("/api/planets", planetsController.getAll);
app.get("/api/planets/:id", planetsController.getOneById);
app.post("/api/planets", planetsController.create);
app.patch("/api/planets/:id", planetsController.updateById);
app.delete("/api/planets/:id", planetsController.deleteAPlanet);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong...");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});