import express, { Request, Response } from 'express';

export const testRoute = express.Router();

testRoute.post('/test', (req: Request, res: Response): void => {
    const data = req.body;
    console.log("Received body from front-end: ");
    console.log(data);

    res.json(
        {
            "success": true
        }
    );
});

testRoute.get('/test', (req: Request, res: Response): void => {
    res.json(
        {
            "value": "hello!"
        }
    );
});