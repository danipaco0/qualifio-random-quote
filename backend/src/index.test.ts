import request from 'supertest';
import app from './index';

let server: any;
const port = process.env.PORT_TEST || 5050;

describe('API initialization', () => {
    beforeAll(() => {
        server = app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should return a random quote', async () => {
        const mockResponse = {
            data: {
                content: "Motivational quote",
                author: "Me"
            }
        };
        jest.fn().mockResolvedValueOnce(mockResponse);

        const response = await request(app).get('/random');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockResponse.data);
    });

    it('sould return 500 if error', async () => {
        jest.fn().mockRejectedValueOnce(new Error('Error fetching quote'));

        const response = await request(app).get('/random');
        expect(response.status).toBe(500);
        expect(response.serverError).toBe(true);
    });

    afterAll(() => {
        server.close();
    });
});
