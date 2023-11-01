import { Router } from 'express';

const router = Router();


export function MainRoute(logger) {
    router.get('/', (req, res) => {
        res.json({ message: 'Hello World!' });
    })
    return router
}