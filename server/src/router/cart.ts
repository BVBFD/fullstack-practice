import express, { Request, Response, NextFunction } from 'express';
import Cart from '../models/Cart';

const router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (updatedCart == null) {
      res.status(401).json('this is not existed!!');
    } else {
      res.status(201).json(updatedCart);
    }
  } catch (error) {
    res.status(401).json(error);
  }
});

router.put(
  '/quantity/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    let incQuan = null;
    try {
      switch (req.query.cal) {
        case 'plus':
          incQuan = await Cart.findByIdAndUpdate(
            { _id: req.params.id },
            {
              $inc: { quantity: 1 },
            },
            { new: true }
          );
          break;

        case 'minus':
          incQuan = await Cart.findByIdAndUpdate(
            req.params.id,
            {
              $inc: { quantity: -1 },
            },
            { new: true }
          );
          break;
      }

      const { quantity, ...others } = incQuan!._doc;
      res.status(201).json(quantity);
    } catch (error) {
      res.status(401).json(error);
    }
  }
);

router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleted = await Cart.findByIdAndRemove(req.params.id);

      if (deleted == null) {
        res.status(404).json('this is not existed!!');
      } else {
        res.status(204).json(`Cart Product has been deleted...!!`);
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }
);

export default router;
