import express, { Request, Response, json, urlencoded } from 'express';
import morgan from 'morgan';
import S3Route from './routes/S3Route';
import EnvironmentService from './services/EnvironmentService';
import ExpressService from './services/ExpressService';

// * Get the express application instance.
const expressApp = ExpressService.app;

// * Server listener.
expressApp.listen(EnvironmentService.PORT, () => {
  console.log(
    `Server is running in http://localhost:${EnvironmentService.PORT}`
  );
});

// * Server middlewares.
expressApp.use(morgan('tiny'));
expressApp.use(express.static('public'));
expressApp.use(json());
expressApp.use(urlencoded({ extended: true }));

// * Server root endpoints.
expressApp.get('/', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: 'public' });
});

// * Server S3 endpoints.
expressApp.use('/api/s3', S3Route);
