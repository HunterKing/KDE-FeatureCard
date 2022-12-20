import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { routes } from './routes'

// make and configure the application.
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// load the environment variables from the .env file
dotenv.config()
const port = process.env.APP_PORT;

//Routes
app.use('/', routes);
app.use(express.static(path.resolve(__dirname, "../../Frontend/build/")))


app.listen(port, () => console.log(`Listening on port ${port}`));
