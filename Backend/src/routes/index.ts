import express from 'express';
import { defaultRoute } from './mainRoute';
import { testRoute } from './testRoute';
import { imageRoute } from './imageRoute';

export const routes = express.Router();
routes.use(defaultRoute);
routes.use(testRoute);
routes.use(imageRoute);