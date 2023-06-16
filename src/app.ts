import express, { Request, Response } from 'express';
const server = express();

server.get('/', (req: Request, res: Response) => {
  console.log('Server has been called.');
  res.json({ message: 'Hello World' });
});

server.listen(3000, () => console.log('Server is running on port 3000'));
