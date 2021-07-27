const express = require('express');
const { getDash } = require('../controllers/dashController');
const router = express.Router();

router.get('/:date', getDash);

module.exports = router;