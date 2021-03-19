"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConfigFactory = void 0;
var tslib_1 = require("tslib");
var faker_1 = tslib_1.__importDefault(require("faker"));
// @ts-ignore
var index_1 = require("@factories/index");
var UserConfigFactory = /** @class */ (function (_super) {
    tslib_1.__extends(UserConfigFactory, _super);
    function UserConfigFactory(fields) {
        var _a;
        if (fields === void 0) { fields = {}; }
        var _this = _super.call(this) || this;
        _this.name = fields.name || faker_1.default.random.word();
        _this.data = fields.data || (_a = {},
            _a[faker_1.default.random.word()] = faker_1.default.random.words(),
            _a[faker_1.default.random.word()] = faker_1.default.random.words(),
            _a[faker_1.default.random.word()] = faker_1.default.random.words(),
            _a);
        _this.tags = fields.tags || [
            {
                'key': faker_1.default.random.word(),
                'value': faker_1.default.random.word()
            },
            {
                'key': faker_1.default.random.word(),
                'value': faker_1.default.random.word()
            }
        ];
        _this.domain_id = fields.domain_id || "domain-" + faker_1.default.random.uuid().substr(0, 8);
        return _this;
    }
    return UserConfigFactory;
}(index_1.BaseFactory));
exports.UserConfigFactory = UserConfigFactory;
//# sourceMappingURL=user-config.js.map