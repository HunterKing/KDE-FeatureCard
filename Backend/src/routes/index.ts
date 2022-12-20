import express from 'express';
import { defaultRoute } from './mainRoute';
import { testRoute } from './testRoute';

export const routes = express.Router();
routes.use(defaultRoute);
routes.use(testRoute);