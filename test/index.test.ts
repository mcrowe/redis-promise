import assert = require('assert')
import Redis from '../src'


suite('index', () => {})


test('index', async () => {
  const client = Redis.createClient({})

  await client.setAsync('testValue', '42')
  const val = await client.getAsync('testValue')
  assert.equal('42', val)
})