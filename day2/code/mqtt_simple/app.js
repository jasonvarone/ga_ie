var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.117');
 
client.on('connect', function () {
  client.subscribe('hello');
  // client.publish('presence', 'Hello mqtt');
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
});
