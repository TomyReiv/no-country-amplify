import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerSpec from './swagger';
import apiRouter from './routes/index.router';
import { errorHandler } from './middleware/ErrorHandler';
import { httpResponse } from './utils/EnumsError';
import cors from "cors"

const app = express();
const HttpResponse = new httpResponse();

app.use(errorHandler);
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', apiRouter);

export default app;