const request = require('supertest');
const app = require('../index'); // Make sure to export your Express app

describe('POST /api/emulate', () => {
  it('should process the emulation request', async () => {
    const res = await request(app)
      .post('/api/emulate')
      .send({ url: 'http://example.com', device: { width: 1024, height: 768 } });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('screenshot');
  });

  it('should handle errors gracefully', async () => {
    const res = await request(app)
      .post('/api/emulate')
      .send({ url: 'bad-url', device: { width: 1024, height: 768 } });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message', 'Failed to process the emulation request.');
  });
});
