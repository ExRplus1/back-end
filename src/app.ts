import express, { Express, Request, Response } from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();

const app: Express = express();

app.use(cors({origin: '*'}));
app.use(compress());
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(favicon(path.join('public', 'favicon.png')));
app.use('/', express.static('public'));
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: '10mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(routes);

export default app;