"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mocha_1 = require("mocha");
var index_1 = require("../index");
var config_1 = tslib_1.__importDefault(require("config"));
var servicePreparation = function () {
    var axiosConfig = {
        baseURL: config_1.default.get('baseURL'),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
exports.default = {
    UserserviceCommon: function () {
        mocha_1.describe('API User Service tests', function () {
            var server = index_1.supertest.agent('http://localhost:3000');
            it('getAllusers', function () {
                server.post('/api/users')
                    .set('Content-Type', 'application/json')
                    .send({
                    userName: 'dummyTest',
                    password: 'this_is_my_secret_paassword',
                    userFirstName: 'draken',
                    userLastName: 'Guard',
                    email: 'ka@hotmail.com'
                }).expect(200)
                    .end(function (err, res) {
                    index_1.assert.equal(res.status, 200);
                    res.status.should.equal(200);
                });
            });
            //TODO: Please Create a rest of API's in this module.
            /* it('getUsersByFirstName', () => {
              assert.equal(1, 1);
            });
            it('getUsersByLastName', () => {
              assert.equal(1, 1);
            });
            it('getSingleUser', () => {
              assert.equal(1, 1);
            });
            it('getSingleUserByFirstName', () => {
              assert.equal(1, 1);
            });
            it('getSingleUserByLastName', () => {
              assert.equal(1, 1);
            });
            it('createUser', () => {
              assert.equal(1, 1);
            });
            it('deleteUser', () => {
              assert.equal(1, 1);
            });
            it('createUser', () => {
              assert.equal(1, 1);
            });
            it('updateUser', () => {
              assert.equal(1, 1);
            }); */
        });
    }
};
//# sourceMappingURL=test-prep.js.map