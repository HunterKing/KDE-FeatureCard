import { Router } from 'express';
import path from 'path';

export const defaultRoute = Router();

defaultRoute.get('/api', (req, res) => {
    console.log("api");
})