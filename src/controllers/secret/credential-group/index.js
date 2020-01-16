import grpcClient from '@lib/grpc-client';
import { pageItems, filterItems, changeQueryKeyword } from '@lib/utils';
import logger from '@lib/logger';

const createCredentialGroup = async (params) => {
    let secretV1 = await grpcClient.get('secret', 'v1');
    let response = await secretV1.CredentialGroup.create(params);

    return response;
};

const updateCredentialGroup = async (params) => {
    let secretV1 = await grpcClient.get('secret', 'v1');
    let response = await secretV1.CredentialGroup.update(params);

    return response;
};


const deleteCredentialGroup = async (params) => {
    let secretV1 = await grpcClient.get('secret', 'v1');
    let response = await secretV1.CredentialGroup.delete(params);

    return response;
};

const getCredentialGroup = async (params) => {
    let secretV1 = await grpcClient.get('secret', 'v1');
    let response = await secretV1.CredentialGroup.get(params);

    return response;
};

const listCredentialGroups = async (params) => {
    changeQueryKeyword(params.query, ['credential_group_id', 'name']);
    let secretV1 = await grpcClient.get('secret', 'v1');
    let response = await secretV1.CredentialGroup.list(params);

    return response;
};

const addCredential = async (params) => {
    let secretV1 = await grpcClient.get('secret', 'v1');
    let response = await secretV1.CredentialGroup.add_credential(params);

    return response;
};

const removeCredential = async (params) => {
    let secretV1 = await grpcClient.get('secret', 'v1');
    let response = await secretV1.CredentialGroup.remove_credential(params);

    return response;
};

export {
    createCredentialGroup,
    updateCredentialGroup,
    deleteCredentialGroup,
    getCredentialGroup,
    listCredentialGroups,
    addCredential,
    removeCredential
};
