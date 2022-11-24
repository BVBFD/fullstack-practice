import express, { Request, Response, NextFunction } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPwd = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPwd,
      img: req.body.img,
    });

    try {
      const savedUser = await newUser.save();
      const { password, ...data } = savedUser._doc;
      res.status(201).json({ data });
    } catch (error) {
      res.status(401).json(error);
    }
  }
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const foundUser = await User.findOne({ email: req.body.email });
      if (!foundUser) {
        res.status(404).json("This User is not existed!!");
      } else {
        const checkedPwd = bcrypt.compareSync(
          req.body.password,
          foundUser.password
        );
        if (!checkedPwd) {
          res.status(401).json("Wrong Password You type in!!");
        } else {
          const { password, ...data } = foundUser._doc;
          res.status(200).json({ data });
        }
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
);

export default router;
