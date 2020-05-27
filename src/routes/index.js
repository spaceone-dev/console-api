import express from 'express';
import statisticsRouter from './statistics';
import identityRouter from './identity';
import repositoryRouter from './repository';
import secretRouter from './secret';
import inventoryRouter from './inventory';
import addOnsRouter from './add-ons';
import pluginRouter from './plugin';
import monitoringRouter from './monitoring';
import configRouter from './config';
import grpcRouter from './v2';
const router = express.Router();
router.use('/statistics', statisticsRouter);
router.use('/identity', identityRouter);
router.use('/repository', repositoryRouter);
router.use('/secret', secretRouter);
router.use('/inventory', inventoryRouter);
router.use('/add-ons', addOnsRouter);
router.use('/plugin', pluginRouter);
router.use('/monitoring', monitoringRouter);
router.use('/config', configRouter);
router.use('/v2',grpcRouter);
export default router;
