const request = require('supertest');
const app = require('./src/app.js');
const Restaurant = require('./models/index.js');

describe('Restaurant testing', () => {
    it('gives status 200', async (req, res) => {
        const newRes = {
            name:'K-Pot', location: 'Jersey City', cuisine: 'Korean'
        };
        const response = await request(app).post('/restaurants').send(newRes);
        expect(response.status).toBe(200);
        // expect(response.text).toEqual(newRes.name);

        
    })
})