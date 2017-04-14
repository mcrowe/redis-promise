# redis-promise

Promise-based Redis client for Typescript and Javascript

## Usage

> npm install @mcrowe/redis-promise --save

```js
import Redis from '@mcrowe/redis-promise'

const client = Redis.createClient({})

await client.setAsync('testValue', '42')

const val = await client.getAsync('testValue')
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

## Release

Release a new version:

> bin/release.sh

This will publish a new version to npm, as well as push a new tag up to github.

## TODO

Wrap redis in a cleaner way than using Bluebird. We shouldn't need to append `Async` to each method. We should also have proper definitions.
