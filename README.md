# is-json-media-type

is this a JSON-based media type ([rfc6838](http://tools.ietf.org/html/rfc6838))?

useful when checking whether or not to `JSON.parse` for a given `Content-Type` header.

tested with [iana/media-types](http://www.iana.org/assignments/media-types/media-types.xhtml), (updated: October 2015)

## install

with [`npm`](https://www.npmjs.com), run

```
npm install --save is-json-media-type
```

## usage

```
var isJsonMediaType = require('is-json-media-type')

isJsonMediaType('text/plain') // false
isJsonMediaType('application/json') // true
isJsonMediaType('application/ld+json') // true
```
