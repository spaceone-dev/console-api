import express from 'express';
import asyncHandler from 'express-async-handler';
import getSummary from '@controllers/statistics/summary';
import getCollectionState from '@controllers/statistics/collection-state';
import getServerState from '@controllers/statistics/server-state';

const router = express.Router();
const controllers = [
    { url: '/summary', func: getSummary },
    { url: '/collection-state', func: getCollectionState },
    { url: '/server-state', func: getServerState }
];

controllers.map((config) => {
    router.post(config.url, asyncHandler(async (req, res, next) => {
        res.json(await config.func(req.body));
    }));
});

export default router;
