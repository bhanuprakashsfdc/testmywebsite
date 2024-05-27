const express = require('express');
const router = express.Router();
const { emulateDevice } = require('../controllers/emulationController');

// POST route for device emulation
router.post('/emulate', emulateDevice);

module.exports = router;
