const express = require('express');
const { getDash, getUsed, getExpired, getGoingExpire, getExpiredBeforeUse } = require('../controllers/dashController');
const router = express.Router();
const { formatDate } = require('../middleware/formatdate');

router.get('/:date', formatDate, getDash);
router.get('/bottles/:date', formatDate, getUsed);
router.get('/exp/:date', formatDate, getExpired);
router.get('/goingexp/:date', formatDate, getGoingExpire);
router.get('/expbefore/:date', formatDate, getExpiredBeforeUse);

module.exports = router;