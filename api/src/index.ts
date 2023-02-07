import 'reflect-metadata';
import 'module-alias/register';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import Container from 'typedi';
import EnvironmentProvider from './Config/EnvironmentProvider';
// import { ENV_CONFIG } from '../app/config';
// import { Logger } from '../libs/logs/logger';
import { useExpressServer, useContainer as routingContainer } from 'routing-controllers';
import * as http from 'http';

const baseDir = __dirname;
const expressApp = express();

routingContainer(Container);

const appConfig = EnvironmentProvider.getEnvironmentConfig.appConfig;

useExpressServer(expressApp, {
  routePrefix: appConfig.API_ROUTE,
  defaultErrorHandler: false,
  controllers: [baseDir + `/**/controllers/*{.js,.ts}`]
});

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());

const server = http.createServer(expressApp);
server.listen(appConfig.PORT, () => {
//   Logger.info('Server', 'Application running on', `${appConfig.HOST_NAME}:${appConfig.PORT}`);
});

// Handling the unHandledRejection errors
process.on('unhandledRejection', (error, promise) => {
//   Logger.error('Server', 'unhandledRejectionError :', `${error}`);
});
