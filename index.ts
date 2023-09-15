import { handler } from './build/handler.js';
import express, { Express, request, response } from "express";

const app: Express = express();

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
	res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(80, () => {
	console.log('listening on port 3000');
});