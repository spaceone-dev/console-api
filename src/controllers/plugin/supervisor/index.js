import grpcClient from '@lib/grpc-client';
import logger from '@lib/logger';

const getSupervisor = async (params) => {
    const pluginV1 = await grpcClient.get('plugin', 'v1');
    let response = await pluginV1.Supervisor.get(params);

    return response;
};

const listSupervisor = async (params) => {
    const pluginV1 = await grpcClient.get('plugin', 'v1');
    let response = await pluginV1.Supervisor.list(params);
    return response;
};

const recoverPlugin = async (params) => {
    if (!params.supervisor_id) {
        throw new Error('Required Parameter. (key = supervisor_id)');
    } else if(!params.plugin_id){
        throw new Error('Required Parameter. (key = plugin_id)');
    } else if(!params.version){
        throw new Error('Required Parameter. (key = version)');
    }

    const pluginV1 = await grpcClient.get('plugin', 'v1');

    /*let successCount = 0;
    let failCount = 0;
    let failItems = {};

    for (let i=0; i < params.plugins.length; i++) {
        const plugin = params.plugins[i];
        try {
            let reqParams = {
                supervisor_id: params.supervisor_id,
                plugin_id: plugin.plugin_id,
                version: plugin.version
            };

            if (params.domain_id) {
                reqParams.domain_id = params.domain_id;
            }
            console.log('reqParams: ', reqParams);
            await pluginV1.Supervisor.recover_plugin(reqParams);
            successCount = successCount + 1;
        } catch (e) {
            const plugin = params.plugins[i];
            failItems[plugin.plugin_id] = e.details || e.message;
            failCount = failCount + 1;
        }
    }

    if (failCount > 0) {
        let error = new Error(`Failed to recover plugins. (success: ${successCount}, failure: ${failCount})`);
        error.fail_items = failItems;
        throw error;
    } else {
        return {};
    }*/

    let response = await pluginV1.Supervisor.recover_plugin(params);
    return response;
};

const listPlugin = async (params) => {
    const pluginV1 = await grpcClient.get('plugin', 'v1');
    let response = await pluginV1.Supervisor.list_plugins(params);
    return response;
};

export {
    recoverPlugin,
    listPlugin,
    getSupervisor,
    listSupervisor
};