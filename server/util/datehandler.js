const daysRemove = (date, days) => {
  const result = new Date(Date.parse(date) - days*86400000);
  return result;
};

const daysAdd = (date, days) => {
  const result = new Date(Date.parse(date) + days*86400000);
  return result;
};

module.exports = {daysAdd, daysRemove};