import express, { Request, Response } from 'express';

export const calcRoute = express.Router();

calcRoute.post('/calc', (req: Request, res: Response): void => {
    const {a, b} = req.body;

    try{
        res.json({
            success:true,
            message: a+b,
        });
    }
    catch{
        res.json({
            success:false,
            message: "One or more of the arguments was a non-integer",
        });
    }
});