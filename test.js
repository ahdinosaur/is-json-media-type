var test = require('tape')
var mimes = require('mime-db')

var isJsonMediaType = require('./')

test('mime database', function (t) {
  var jsons = [
    "application/alto-costmap+json",
    "application/alto-costmapfilter+json",
    "application/alto-directory+json",
    "application/alto-endpointcost+json",
    "application/alto-endpointcostparams+json",
    "application/alto-endpointprop+json",
    "application/alto-endpointpropparams+json",
    "application/alto-error+json",
    "application/alto-networkmap+json",
    "application/alto-networkmapfilter+json",
    "application/calendar+json",
    "application/coap-group+json",
    "application/jose+json",
    "application/jrd+json",
    "application/json",
    "application/json-patch+json",
    "application/jsonml+json",
    "application/jwk+json",
    "application/jwk-set+json",
    "application/ld+json",
    "application/manifest+json",
    "application/merge-patch+json",
    "application/rdap+json",
    "application/reputon+json",
    "application/scim+json",
    "application/vcard+json",
    "application/vnd.apache.thrift.json",
    "application/vnd.api+json",
    "application/vnd.bekitzur-stech+json",
    "application/vnd.collection+json",
    "application/vnd.collection.doc+json",
    "application/vnd.collection.next+json",
    "application/vnd.document+json",
    "application/vnd.drive+json",
    "application/vnd.geo+json",
    "application/vnd.hal+json",
    "application/vnd.heroku+json",
    "application/vnd.hyperdrive+json",
    "application/vnd.ims.lis.v2.result+json",
    "application/vnd.ims.lti.v2.toolconsumerprofile+json",
    "application/vnd.ims.lti.v2.toolproxy+json",
    "application/vnd.ims.lti.v2.toolproxy.id+json",
    "application/vnd.ims.lti.v2.toolsettings+json",
    "application/vnd.ims.lti.v2.toolsettings.simple+json",
    "application/vnd.mason+json",
    "application/vnd.micro+json",
    "application/vnd.miele+json",
    "application/vnd.oftn.l10n+json",
    "application/vnd.oracle.resource+json",
    "application/vnd.siren+json",
    "application/vnd.xacml+json",
    "application/x-web-app-manifest+json",
  ]

  Object.keys(mimes).forEach(function (mime) {
    var isJson = isJsonMediaType(mime)

    if (jsons.indexOf(mime) > -1) {
      t.equal(isJson, true, mime + ' is json')
    } else {
      t.equal(isJson, false, mime + ' is not json')
    }
  })

  t.end()
})
