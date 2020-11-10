const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const notes = await prisma.notes.findMany();
  res.json(notes);
});

module.exports = router;
