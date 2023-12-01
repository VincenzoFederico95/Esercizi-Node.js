const Joi = require("joi");

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

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const getAPlanet = planets.find((p) => p.id === Number(id));

  res.status(200).json(getAPlanet);
};

const create = (req: Request, res: Response) => {
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
};

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const validationUpdate = planetSchema.validate({ id: Number(id), name });

  if (validationUpdate.error) {
    return res
      .status(400)
      .json({ msg: validationUpdate.error.details[0].message });
  } else {
    planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
    res.status(200).json(planets);
  }
};

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));
  res.status(200).json({ msg: "planet deleted!" });
};

export { getAll, getOneById, create, updateById, deleteById };