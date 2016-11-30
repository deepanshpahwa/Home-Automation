var express = require('express'),
gpio = require('rpi-gpio');
var app = express();
var pin = 3;

app.get('/lights', function(req, res) {
  if (!req.query.state) {
    res.end(JSON.stringify({
      'success': false
    }));
  }
  var turnOff = (req.query.state == 0);
  console.log("Turning lights " + (turnOff ? "off" : "on"));
  
  
  gpio.setup(pin, gpio.DIR_OUT, function(err) {
    if (err) throw err;
    gpio.write(pin, (!turnOff ? 0 : 1), function(err) {
        if (err) throw err;
        console.log('Written to pin');
      res.end(JSON.stringify({
        'success': true,
        'state': !turnOff
      }));
    });
  });
});
app.get('/lights/status', function(req, res) {
    gpio.setup(pin, gpio.DIR_IN, function(err) {
    if (err) throw err;
    gpio.read(pin, function(err, value) {
        if (err) throw err;
        console.log('The value is '+ value);
    });
  });
});
console.log("Listening on port 2368");
app.listen(2368);
