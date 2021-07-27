const express = require('express');
const { getInjections } = require('../controllers/injectionsController');
const router = express.Router();

router.get('/', getInjections);

module.exports = router;