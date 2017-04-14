"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("redis");
const Bluebird = require("bluebird");
Bluebird.promisifyAll(Redis.RedisClient.prototype);
Bluebird.promisifyAll(Redis.Multi.prototype);
function createClient(params) {
    return Redis.createClient(params);
}
exports.default = { createClient };
