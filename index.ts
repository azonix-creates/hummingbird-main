import { handler } from './build/handler.js';
import express, { Express, request, response } from "express";

const app: Express = express();

app.use(handler);

app.listen(80, () => { // runs on default port but doesnt rlly matter simce this is deployed to vercel
	console.log('listening on port 3000');
});