import Redis = require('redis')
import Bluebird = require('bluebird')


export interface ClientParams {
  host?: string
  port?: number
  path?: string
  url?: string
  password?: string,
  retry_strategy?: Function
}


Bluebird.promisifyAll(Redis.RedisClient.prototype)
Bluebird.promisifyAll(Redis.Multi.prototype)


function createClient(params: ClientParams) {
  return Redis.createClient(params)
}


export default { createClient }