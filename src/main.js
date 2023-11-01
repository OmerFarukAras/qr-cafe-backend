import express from "express"
import config from "config";

import { Logger } from "./util/logger.js";

import mainMiddleware from "./middlewares/main.js";
import { MainRoute } from "./routes/main.route.js";

const app = express();

const port = config.get("server.port") || 3000;

const logger = new Logger().init();

app.use(logger.express());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mainMiddleware(logger));

app.use('/', MainRoute(logger));

app.get('*', (req, res) => {
    console.log(req.user)
    res.error(404, 'Not Found');
});

app.listen(port, () => {
    logger.info(`Server listening at http://localhost:${port}`);
});

//     darry = ["debug", "ignore", "info", "error", "warn", "request"]