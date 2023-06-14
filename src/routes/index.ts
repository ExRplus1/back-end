import express from 'express';
import info from './info';
import spheron from './spheron';


const routes = express.Router();

routes.use(info);
routes.use(spheron);

export default routes;