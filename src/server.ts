import express, { Request, Response, json, urlencoded } from 'express';
import morgan from 'morgan';
import environment from './libs/environment';
import ExpressService from './libs/services/ExpressService';
import S3Route from './routes/S3Route';

// * Server listener.
ExpressService.app.listen(environment.PORT, () => {
  console.log(`Server is running in http://localhost:${environment.PORT}`);
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
