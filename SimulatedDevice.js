//npm init
//npm install azure-iot-device azure-iot-device-mqtt --save

'use strict';

const clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
const Message = require('azure-iot-device').Message;
const config = require('./appConfig');

//var connectionString = 'HostName={youriothostname};DeviceId=myFirstNodeDevice;SharedAccessKey={yourdevicekey}';
const connectionString = `HostName=${config.iotHubDomain};DeviceId=myFirstNodeDevice;SharedAccessKey=${config.deviceKey}`;

const client = clientFromConnectionString(connectionString);


//Add the following function to display output from the application
function printResultFor(op) {
  return function printResult(err, res) {
    if (err) console.log(op + ' error: ' + err.toString());
    if (res) console.log(op + ' status: ' + res.constructor.name);
  };
}


//Create a callback and use the setInterval function to send a message to your IoT hub every second
var connectCallback = function (err) {
  if (err) {
    console.log('Could not connect: ' + err);
  } else {
    console.log('Client connected');

    // Create a message and send it to the IoT Hub every second
    setInterval(function(){
        var temperature = 20 + (Math.random() * 15);
        var humidity = 60 + (Math.random() * 20);            
        var data = JSON.stringify({ deviceId: 'myFirstNodeDevice', temperature: temperature, humidity: humidity });
        var message = new Message(data);
        message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');
        console.log("Sending message: " + message.getData());
        client.sendEvent(message, printResultFor('send'));
    }, 1000);
  }
};


//Open the connection to your IoT Hub and start sending messages
client.open(connectCallback);