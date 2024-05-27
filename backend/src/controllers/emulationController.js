const { captureScreenshot } = require('../utils/captureUtils');

exports.emulateDevice = async (req, res) => {
    const { url, device } = req.body;

    // Log the request body for debugging
    console.log('Request body:', req.body);

    // Validate the request body
    if (!url || !device || !device.width || !device.height) {
        return res.status(400).json({ message: 'Invalid request: URL and device dimensions are required.' });
    }

    try {
        const screenshot = await captureScreenshot(url, device.width, device.height);
        res.status(200).send(screenshot);
        console.log('sucess::');
    } catch (error) {
        console.error('Error during emulation:', error);
        res.status(500).json({ message: 'Failed to process the emulation request.', error: error.message });
    }
};
