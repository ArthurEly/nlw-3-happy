var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyD-k6rznRZyo4SO-3n1tIAQvQ7IdyuXUmE', // for Mapquest, OpenCage, Google Premier
  formatter: 'json' // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

geocoder.reverse({lat:28.5967439, lon:77.3285038}, function(err, res) {
  console.log(res);
});