import { Router } from 'express';
import path from 'path';

export const defaultRoute = Router();

// ?????
// defaultRoute.get('*', (req, res) => {
//     console.log(__dirname);
//     res.sendFile((path.resolve(__dirname, '../../../Frontend/build/', 'index.html')));
// })

defaultRoute.get('/api', (req, res) => {
    console.log("api");
})