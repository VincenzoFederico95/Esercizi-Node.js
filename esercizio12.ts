/* Create a dummy "database" of planets using a let variable. (You will use this data in further exercises.)
Configure your app (app.use()) to:
accept JSON from the Client
log the Client's requests
Use
Dummy database with initial data: */


import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(express.json()); 

app.use(morgan("dev"));

  type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

app.get("/", (req, res) => {
  res.status(200).json(planets)
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something went wrong...")
  
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
  
})