import express, { Request, Response, NextFunction } from 'express';
import Review from '../models/Review';

const router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updatedReview);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleted = await Review.findByIdAndDelete(req.params.id);

      if (deleted == null) {
        res.status(404).json('this is not existed!!');
      } else {
        res.status(204).json(`Reveiw has been deleted...!!`);
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }
);

export default router;
