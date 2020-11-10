const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const noteSchema = require("../schemas/note");

router.get("/", async (req, res) => {
  const notes = await prisma.notes.findMany();
  res.json(notes);
});

router.post("/create", async (req, res) => {
  const body = req.body;

  if (!noteSchema.validate(body).error) {
    const created = await prisma.notes.create({
      data: body,
    });

    res.json(created);
  } else {
    res.status(400).json(noteSchema.validate(body).error.details);
  }
});

module.exports = router;
