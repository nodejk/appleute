import 'reflect-metadata';
import express from 'express';
import * as bodyParser from 'body-parser';
import Container from 'typedi';
import EnvironmentProvider from './config/EnvironmentProvider';
import passport from 'passport';
import {Action, useExpressServer, useContainer as routingContainer } from 'routing-controllers';
import * as http from 'http';

const baseDir = __dirname;
const expressApp = express();
expressApp.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST,GET");
  next();
});


routingContainer(Container);

const appConfig = EnvironmentProvider.appConfig;


console.log(baseDir);
console.log(appConfig.API_ROUTE);
console.log(appConfig.PORT);

useExpressServer(expressApp, {
  routePrefix: appConfig.API_ROUTE,
  defaultErrorHandler: false,
  controllers: [baseDir + `\\app\\**\\Controllers\\*{.js,.ts}`],
});

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());

const server = http.createServer(expressApp);
server.listen(appConfig.PORT);

