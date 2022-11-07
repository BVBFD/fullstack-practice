import express, { Request, Response, NextFunction } from 'express';
import Blog from '../models/Blog';

const router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const idQuery = req.query.id;
    if (idQuery == null) {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } else {
      const blog = await Blog.findById(idQuery);
      res.status(200).json(blog);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updatedBlog);
  } catch (error) {
    res.status(401).json(error);
  }
});

router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
      if (deletedBlog == null) {
        res.status(404).json('This is not existed Blog!!');
      } else {
        res.status(204).json('This Blog Post has been deleted!!');
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }
);

export default router;
