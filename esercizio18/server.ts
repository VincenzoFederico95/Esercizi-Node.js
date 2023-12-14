import express, { NextFunction, Request, Response } from 'express';
import multer from 'multer';

import {
  getAll,
  getOneById,
  create,
  createImg,
  updateById,
  deleteAPlanet,
} from './controllers/planets'
  
import {login, signUp} from './controllers/users'

const port = 3000;
const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req: Request, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.get('/api/planets', getAll);
app.get('/api/planets/:id', getOneById);
app.post('/api/planets', create);
app.post('/api/planets/:id/image', upload.single('image'), createImg);
//CRUD for users db
app.post('/api/users/login', login);

app.post('/api/users/signup', signUp);

app.patch('/api/planets/:id', updateById);
app.delete('/api/planets/:id', deleteAPlanet);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong...');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});