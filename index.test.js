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
        done();
        // expect(response.text).toEqual(newRes.name);

        
    }),
    it('gives the error array', async (req, res) => {
        const fakeRes = {
            name:'', location:'NJ', cuisine:'soul'
        };
        const response = await request(app).post('/restaurants').setEncoding(fakeRes);
        expect(response.body).toHaveProperty("errors");
        expect(Array.isArray(response.body.errors)).toBe(true);
    })
})