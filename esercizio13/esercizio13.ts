import { NextFunction, Request, Response } from "express";

const express = require("express");
const asyncErrors = require("express-async-errors");
const Joi = require("joi");


const morgan = require("morgan");

const app = express();
const port = 3000;
app.use(express.json());

app.use(morgan("dev"));

type Planet = {
  id: number;
  name: string;
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

app.get("/api/planets", (req: Request, res:Response) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req: Request, res:Response) => {
  const { id } = req.params;
  const getAPlanet = planets.find((p) => p.id === Number(id));

  res.status(200).json(getAPlanet);
});

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

app.post("/api/planets", (req: Request, res:Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  const validationNewPlanet = planetSchema.validate(newPlanet);

  if (validationNewPlanet.error) {
    return res
      .status(400)
      .json({ msg: validationNewPlanet.error.details[0].message });
  } else {
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: "New planet created!" });
  }
});

app.put("/api/planets/:id", (req: Request, res:Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  res.status(200).json(planets);
});

app.delete("/api/planets/:id", (req: Request, res:Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));
  res.status(200).json({ msg: "planet deleted!" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("something went wrong...");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});