module.exports = (req, res, next) => {
  const { email } = req.body;

  if (!email || !(/\S+@\S+\.\S+/.test(email))) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  
  next();
};