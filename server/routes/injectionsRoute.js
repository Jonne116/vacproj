const express = require('express');
const { getInjections } = require('../controllers/injectionsController');
const router = express.Router();

router.get('/:time', getInjections);

module.exports = router;