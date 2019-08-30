import express from 'express';
import asyncHandler from 'express-async-handler';
import * as role from '@controllers/identity/role';

const router = express.Router();
const controllers = [
    { url: '/create', func: role.createRole },
    { url: '/update', func: role.updateRole },
    { url: '/delete', func: role.deleteRole },
    { url: '/get', func: role.getRole },
    { url: '/list', func: role.listRoles }
];

controllers.map((config) => {
    router.post(config.url, asyncHandler(async (req, res, next) => {
        res.json(await config.func(req.body));
    }));
});

export default router;