import express, { Request, Response, NextFunction } from 'express';
import Product from '../models/Product';

const router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (updatedProduct == null) {
      res.status(401).json('this is not existed!!');
    } else {
      res.status(201).json(updatedProduct);
    }
  } catch (error) {
    res.status(401).json(error);
  }
});

router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleted = await Product.findByIdAndDelete(req.params.id);
      if (deleted == null) {
        res.status(404).json('this is not existed!!');
      } else {
        res.status(204).json(`Product has been deleted...!!`);
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }
);

export default router;
