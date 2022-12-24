import express, { Request, Response } from 'express';
import { existsSync } from 'fs';
import path from 'path';
import data from '../../cardData/json/data.json';

export const imageRoute = express.Router();
const IMAGE_PATH = path.resolve(__dirname, "../../cardData/Images");
let currentImage = IMAGE_PATH + '/' + '27204311.jpg';

imageRoute.get('/api/image', (req: Request, res: Response): void => {
    res.sendFile(currentImage);
});

imageRoute.post('/api/image', (req: Request, res: Response): void => {
    const reqid = req.body.id;
    currentImage = IMAGE_PATH + '/' + reqid + '.jpg';

    if(! existsSync(currentImage)){
        for(const obj of Object.entries(data)){
            if(obj['id'] === reqid){

            }
        }
        console.log(`URL for ID ${reqid} is ${ data[reqid]?.name } `);
        // const image = await fetch(
        //     {
                
        //     }
        // )
    }
    
    res.sendStatus(200);
})