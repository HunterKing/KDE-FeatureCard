import express from 'express';
import { defaultRoute } from './mainRoute';
import { calcRoute } from './calcRoute';
import { testRoute } from './testRoute';

export const routes = express.Router();
routes.use(defaultRoute);
routes.use(calcRoute);
routes.use(testRoute);