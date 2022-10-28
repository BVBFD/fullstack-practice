import express, { Request, Response, NextFunction } from 'express';
import Menu from '../models/Menu';

const router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const newMenu = new Menu(req.body);
  try {
    const savedMenu = await newMenu.save();
    res.status(201).json(savedMenu);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updatedMenu);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleted = await Menu.findByIdAndDelete(req.params.id);
      if (deleted == null) {
        res.status(404).json('this is not existed!!');
      } else {
        res.status(204).json('Menu has been deleted...!!');
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }
);

export default router;
