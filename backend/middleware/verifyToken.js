const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Token non valide");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Vous n'êtes pas identifié");
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Vous n'êtes pas autorisé à faire cela");
    }
  });
};

const verifyTokenAuthAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Vous n'êtes pas autorisé à faire cela");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAuthAndAdmin };
