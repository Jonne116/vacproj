const formatDate = async (req, res, next) => {
  const dateFormat = /^\w{4}[-]\w{2}[-]\w{2}/;
  
  if(req.params.date.match(dateFormat)) {
    const value = await new Date(req.params.date);
    req.params.date = value;
    next();
  }
  else {
    next(new Error);
  }
};

module.exports = {formatDate};