const formatDate = (req, res, next) => {
  const value = new Date(req.params.date);
  req.params.date = value;
  next();
};

module.exports = {formatDate};