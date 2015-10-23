var MediaType = require('media-type')

module.exports = isJsonMediaType

function isJsonMediaType (str) {
  var mediaType = MediaType.fromString(str)

  return mediaType.isValid() &&
    mediaType.type === 'application' &&
    (
      mediaType.subtype === 'json' ||
      mediaType.suffix === 'json' ||
      mediaType.subtypeFacets.indexOf('json') > -1
    )
}
