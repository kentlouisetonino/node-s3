import express, { Request, Response, json, urlencoded } from 'express';
import morgan from 'morgan';
import S3Route from './routes/S3Route';
import EnvironmentService from './services/EnvironmentService';
import ExpressService from './services/ExpressService';

// * Server listener.
ExpressService.app.listen(EnvironmentService.PORT, () => {
  console.log(
    `Server is running in http://localhost:${EnvironmentService.PORT}`
  );
});

// * Server middlewares.
ExpressService.app.use(morgan('tiny'));
ExpressService.app.use(express.static('public'));
ExpressService.app.use(json());
ExpressService.app.use(urlencoded({ extended: true }));

// * Server root endpoints.
ExpressService.app.get('/', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: 'public' });
});

// * Server S3 endpoints.
ExpressService.app.use('/api/s3', S3Route);
