"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistinctValues = void 0;
var tslib_1 = require("tslib");
var grpc_client_1 = tslib_1.__importDefault(require("@lib/grpc-client"));
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var getClient = function (service) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, grpc_client_1.default.get(service)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var checkParameter = function (params) {
    if (!params.resource_type) {
        throw new Error('Required Parameter. (key = resource_type)');
    }
    if (!params.distinct_key) {
        throw new Error('Required Parameter. (key = distinct_key)');
    }
};
var getOptions = function (options) {
    return {
        limit: (options && options.limit),
        filter: (options && options.filter) || [],
        search_type: (options && options.search_type) || 'value'
    };
};
var parseResourceType = function (resourceType) {
    var _a = resourceType.split('.'), service = _a[0], resource = _a[1];
    return [service, resource];
};
var makeRequest = function (params, options) {
    var distinctKey = params.distinct_key;
    var query = {};
    if (distinctKey === 'tags') {
        query = {
            distinct: 'tags.key',
            filter: []
        };
    }
    else if (distinctKey.startsWith('tags.')) {
        query = {
            distinct: 'tags.value',
            filter: []
        };
    }
    else {
        query = {
            distinct: distinctKey,
            filter: [
                {
                    'key': distinctKey,
                    'value': null,
                    'operator': 'not'
                }
            ]
        };
    }
    if (options.filter) {
        query.filter = lodash_1.default.merge(query.filter, lodash_1.default.cloneDeep(options.filter));
    }
    if (params.search && distinctKey !== 'tags') {
        if (query.filter !== undefined) {
            query.filter.push({
                k: distinctKey,
                v: params.search,
                o: 'contain'
            });
        }
    }
    if (options.limit) {
        query.page = {
            limit: options.limit
        };
    }
    return {
        query: query
    };
};
var makeResponse = function (params, response) {
    var results = response.results.map(function (result) {
        return {
            key: result,
            name: result
        };
    });
    return {
        total_count: response.total_count,
        results: results
    };
};
var getDistinctValues = function (params) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var options, _a, service, resource, client, requestParams, response;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                checkParameter(params);
                options = getOptions(params.options);
                _a = parseResourceType(params.resource_type), service = _a[0], resource = _a[1];
                return [4 /*yield*/, getClient(service)];
            case 1:
                client = _b.sent();
                requestParams = makeRequest(params, options);
                return [4 /*yield*/, client[resource].stat(requestParams)];
            case 2:
                response = _b.sent();
                return [2 /*return*/, makeResponse(params, response)];
        }
    });
}); };
exports.getDistinctValues = getDistinctValues;
//# sourceMappingURL=distinct.js.map