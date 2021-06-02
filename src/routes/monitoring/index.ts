import express from 'express';
import dataSourceRouter from './data-source';
import logRouter from './log';
import metricRouter from './metric';
import escalationPolicy from './escalation-policy';
import projectAlertConfig from './project-alert-config';
import alertRouter from './alert';
import noteRouter from './note';

const router = express.Router();

router.use('/data-source', dataSourceRouter);
router.use('/log', logRouter);
router.use('/metric', metricRouter);
router.use('/escalation-policy', escalationPolicy);
router.use('/project-alert-config', projectAlertConfig);
router.use('/alert', alertRouter);
router.use('/note', noteRouter);
export default router;
