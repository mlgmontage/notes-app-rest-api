const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(403);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    console.log(error);
    if (error) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = authMiddleware;
