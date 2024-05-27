const { captureScreenshot } = require('../utils/captureUtils');

exports.emulateDevice = async (req, res) => {
    const { url, width, height } = req.body;
    try {
        const screenshot = await captureScreenshot(url, width, height);
        res.status(200).send(screenshot);
    } catch (error) {
        res.status(500).send('Failed to emulate device');
    }
};
