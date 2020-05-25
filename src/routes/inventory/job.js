import express from 'express';
import asyncHandler from 'express-async-handler';
import * as job from '@controllers/inventory/job';

const router = express.Router();
const controllers = [
    { url: '/list', func: job.listJobs },
    { url: '/stat', func: job.statJobs }
];

controllers.map((config) => {
    router.post(config.url, asyncHandler(async (req, res, next) => {
        res.json(await config.func(req.body));
    }));
});

export default router;
