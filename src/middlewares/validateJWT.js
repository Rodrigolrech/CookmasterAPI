const jwt = require('jsonwebtoken');

const secret = 'senhaSecretaDoProjeto';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }
  try {
    const payload = jwt.verify(token, secret);
    const { data: { _id, role } } = payload;
    req.userId = _id;
    req.role = role;
    next();
  } catch (error) {
  return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = validateJWT;