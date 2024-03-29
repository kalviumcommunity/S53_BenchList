const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("./productschema");
const jwt=require("jsonwebtoken");
const UserModel=require("./userschema")
const app = express();
app.use(express.json());

router.get("/", async (req, res) => {
  try {
    const getData = await User.find({});
    res.status(201).send(getData);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getData = await User.findOne({ _id });
    res.status(201).send(getData);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    if (newUser) {
      res.status(201).json(newUser);
    } else {
      res.status(400);
      throw new Error("Failed To Create User");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getData = await User.findByIdAndUpdate(_id, req.body);
    res.status(201).send(getData);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getData = await User.findByIdAndDelete(_id);
    res.status(201).send(getData);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    if (newUser) {
      const token = jwt.sign({ name: newUser.name }, 'secretkey');
      res.status(201).json({ user: newUser, token });
    } else {
      res.status(400);
      throw new Error("Failed To Create User");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


router.post("/login", async (req, res) => {
  try {
    const {name} = req.body;
    const newUser = await UserModel.findOne({name});
    if (newUser) {
      if(newUser.password === req.body.password){
        const token = jwt.sign({ name: newUser.name }, 'secretkey');
        res.status(201).json({ user: newUser, token });
      }
      else{
        res.send("password is incorrect")
      }
    } else {
      res.status(400).send("User not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});




module.exports = router;
