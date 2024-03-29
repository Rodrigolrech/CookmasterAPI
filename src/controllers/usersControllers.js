const usersServices = require('../services/usersServices');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  const response = await usersServices.create(name, email, password);
  return res.status(response.status).json(response.message);
};

const createAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  const response = await usersServices.createAdmin(name, email, password);
  return res.status(response.status).json(response.message);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await usersServices.login(email, password);
  return res.status(response.status).json(response.message);
};

module.exports = {
  create,
  login,
  createAdmin,
};
