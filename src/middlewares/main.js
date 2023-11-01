import jwt from 'jsonwebtoken';
import config from 'config'


export default function mainMiddleware(logger) {
    return function main(req, res, next) {
        // jwt check here req.user

        res.error = (status, message) => {
            logger.ignore(message);
            res.status(status).json({ error: message });
        }

        res.success = (status, message) => {
            res.status(status).json({ success: message });
        }

        res.result = (status, result) => {
            res.status(status).json(result);
        }
        next();
    }
}