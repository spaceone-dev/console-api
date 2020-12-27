import express from 'express';
import domainRouter from './domain';
import domainOwnerRouter from './domain-owner';
import projectGroupRouter from './project-group';
import projectRouter from './project';
import policyRouter from './policy';
import roleRouter from './role';
import roleBindingRouter from './role-binding';
import userRouter from './user';
import apiKeyRouter from './api-key';
import tokenRouter from './token';
import providerRouter from './provider';
import serviceAccountRouter from './service-account';
import endpointRouter from './endpoint';

const router = express.Router();

router.use('/domain', domainRouter);
router.use('/domain-owner', domainOwnerRouter);
router.use('/project-group', projectGroupRouter);
router.use('/project', projectRouter);
router.use('/policy', policyRouter);
router.use('/role', roleRouter);
router.use('/role-binding', roleBindingRouter);
router.use('/user', userRouter);
router.use('/api-key', apiKeyRouter);
router.use('/token', tokenRouter);
router.use('/provider', providerRouter);
router.use('/service-account', serviceAccountRouter);
router.use('/endpoint', endpointRouter);
export default router;
