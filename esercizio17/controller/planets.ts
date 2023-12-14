import { Request, Response } from 'express';
import Joi from 'joi';
import {db} from '../db'

const getAll = async (req: Request, res: Response) => {
  const planets = await db.many(`SELECT * FROM planets`);
  res.status(200).json(planets);
};

const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planets = await db.oneOrNone(
    `SELECT * FROM planets WHERE id=$1;`,
    Number(id)
  );
  const planet = planets?.find((p: any) => p.id === Number(id));
  res.status(200).json(planet);
};

const planetSchema = Joi.object({
  name: Joi.string().required(),
});


const create = async (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  const validationPlanet = planetSchema.validate(newPlanet);

  if (validationPlanet.error) {
    return res
      .status(400)
      .json({ msg: validationPlanet.error.details[0].message });
  } else {
    await db.none(`INSERT INTO PLANETS (name) VALUES ($1)`, name);
    res.status(201).json({ msg: "new planet created" });
  }
};

const createImg = async (req: Request, res: Response) => {
  const { id } = req.params;
  const fileName = (req.file as any)?.path;

  try {
    if (fileName) {
      await db.none(`UPDATE planets SET image=$1 WHERE id=$2`, [fileName, id]);
      res.status(200).json({ msg: "Image uploaded and linked to planet!" });
    } else {
      res.status(400).send("An error occurred with the upload of your file");
    }
  } catch (error) {
    console.error("Error updating image:", error.message);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    await db.none(`UPDATE planets SET name=$1 WHERE id=$2`, [name, id]);
    res.status(200).json({ msg: "Planet updated!" });
  } catch (error) {
    console.error("Error updating planet:", error.message);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const deleteAPlanet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));
    res.status(200).json({ msg: "Planet deleted!" });
  } catch (error) {
    console.error("Error deleting planet:", error.message);
    res.status(500).json({ msg: "Internal server error" });
  }
};


export {
  getAll,
  getOneById,
  create,
  createImg,
  updateById,
  deleteAPlanet,
};