const express = require('express');
const router = express.Router();
const { emulateDevice } = require('../controllers/emulationController');

router.post('/emulate', emulateDevice);

module.exports = router;
