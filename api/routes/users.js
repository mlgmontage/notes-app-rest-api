const express = require("express");
const router = express.Router();
const signupSchema = require("../schemas/register");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

router.post("/signup", async (req, res) => {
  const body = req.body;

  if (!signupSchema.validate(body).error) {
    const login = await prisma.users.findMany({ where: { Login: body.Login } });

    if (login.length == 0) {
      const hash = await bcrypt.hash(body.Password, 10);
      body.Password = hash;

      const newLogin = await prisma.users.create({ data: body });

      res.json({
        message: "Account created successfully",
      });
    } else {
      res.status(400).json({
        message: "Login already exists",
      });
    }
  } else {
    res.status(400).json(signupSchema.validate(body).error.details);
  }
});

module.exports = router;
